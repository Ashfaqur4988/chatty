import Conversations from "./Conversations";
import SearchBar from "./SearchBar";

const SideBar = () => {
  return (
    // <div>sidebar</div>
    <div className="flex flex-col w-full h-screen  bg-gray-900 text-gray-100 border-r border-gray-600">
      <div className="p-4 border-b border-gray-800">
        <SearchBar />
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* {conversations.map((conversation) => (
          
        ))} */}
        <Conversations />
      </div>
    </div>
  );
};

export default SideBar;
