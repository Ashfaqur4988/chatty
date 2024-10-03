import MessageWindow from "../../components/messages/MessageWindow";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const handleBack = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Navbar */}
      <div className="flex-none">
        <Navbar />
      </div>

      {/* Main content area with Sidebar and MessageWindow */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div
          className={`text-xl h-full w-full ${
            selectedConversation ? "hidden" : "block w-full"
          } md:w-1/3 md:block`}
        >
          <SideBar />
        </div>

        {/* Message Window */}
        <div
          className={`relative flex-grow flex flex-col h-full ${
            selectedConversation ? "block w-full" : "hidden"
          } md:w-2/3 md:block`}
        >
          {/* Back button - visible only on mobile and when a conversation is selected */}
          {selectedConversation && (
            <button
              onClick={handleBack}
              className="absolute top-4 left-4 text-blue-500 md:hidden"
            >
              ← Back
            </button>
          )}

          <MessageWindow />
        </div>
      </div>
    </div>
  );
};
export default Home;
