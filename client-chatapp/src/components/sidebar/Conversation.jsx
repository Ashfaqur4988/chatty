import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

/* eslint-disable react/prop-types */
const Conversation = ({ conversation }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation.id);

  return (
    <>
      <div
        className={`flex items-center p-4 hover:bg-gray-800 cursor-pointer ${
          isSelected ? "bg-gray-700" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
          <img
            src={
              conversation.profilePic
                ? conversation.profilePic
                : `/noavatar.jpg`
            }
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{conversation.username}</h3>
            {/* <span className="text-xs text-gray-500">time</span> */}
          </div>
          {isOnline ? (
            <p className="text-sm text-green-500 truncate">Online</p>
          ) : (
            ""
          )}
        </div>
        {/* {conversation > 0 && (
      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center ml-2">
        <span className="text-xs">{conversation.unread}</span>
      </div>
    )} */}
      </div>
    </>
  );
};
export default Conversation;
