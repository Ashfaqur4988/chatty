import { Loader, Send } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const SendMessage = () => {
  const [newMessage, setNewMessage] = useState("");

  const { loading, sendMessage } = useSendMessage();
  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log(newMessage);
    if (!newMessage.trim()) return;
    await sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <>
      <div className="border-t border-gray-800 p-4">
        <form
          className="flex items-center space-x-2"
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            name="body"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {loading ? <Loader /> : <Send size={20} />}
          </button>
        </form>
      </div>
    </>
  );
};
export default SendMessage;
