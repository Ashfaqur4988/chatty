/* eslint-disable react/prop-types */
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};

const socketURL =
  import.meta.env.MODE === "development" ? "http://localhost:8080" : "/";

const SocketContextProvider = ({ children }) => {
  const socketRef = useRef(null);

  const [onlineUsers, setOnlineUsers] = useState([]);
  const { currentUser, isLoading } = useAuthContext();

  useEffect(() => {
    if (currentUser && !isLoading) {
      const socket = io(socketURL, {
        query: {
          userId: currentUser.id,
        },
      });
      socketRef.current = socket;

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else if (!currentUser && !isLoading) {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    }
  }, [currentUser, isLoading]);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
