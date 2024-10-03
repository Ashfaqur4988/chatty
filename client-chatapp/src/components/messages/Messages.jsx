import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  return (
    <div className="flex flex-col gap-2">
      {loading ? (
        <svg
          className="w-5 h-5 mx-auto text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        ""
      )}
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      {messages.length === 0 && !loading ? (
        <span className="text-xl font-bold mt-12 flex justify-center items-center">
          Send a message to start conversation
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
export default Messages;
