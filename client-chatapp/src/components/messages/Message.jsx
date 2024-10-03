/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { format } from "timeago.js";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const { currentUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  return (
    <div>
      <div
        className={`flex ${
          currentUser.id === message.senderId ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`flex items-end space-x-2 max-w-xs md:max-w-md ${
            currentUser.id === message.senderId
              ? "flex-row-reverse space-x-reverse"
              : "flex-row"
          }`}
        >
          <div className="text-gray-300 py-1">
            {currentUser.id === message.senderId
              ? currentUser.username
              : selectedConversation.username}
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
            <img
              src={
                currentUser.id === message.senderId
                  ? currentUser.profilePic
                    ? currentUser.profilePic
                    : "/noavatar.jpg"
                  : selectedConversation.profilePic
                  ? selectedConversation.profilePic
                  : "/noavatar.jpg"
              }
              alt=""
              className="rounded-full"
            />
          </div>
          <div
            className={`rounded-lg p-3 ${
              currentUser.id === message.senderId
                ? "bg-blue-600"
                : "bg-gray-700"
            }`}
          >
            <p className="text-white">{message.body}</p>
            <p className="text-xs text-gray-300 mt-1">
              {format(message.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
