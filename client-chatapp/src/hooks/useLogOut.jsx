import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useAuthContext();

  const logout = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      localStorage.removeItem("user");
      setCurrentUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout, setLoading };
};
export default useLogOut;
