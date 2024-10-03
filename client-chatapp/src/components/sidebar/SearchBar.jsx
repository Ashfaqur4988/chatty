import { Search } from "lucide-react";
import { useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search) return;

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <>
      <form className="relative flex gap-2" onSubmit={handleSearch}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search conversations..."
          className="w-full py-2 pl-4 pr-8 rounded-md bg-gray-800 focus:outline-none 
          focus:ring-2 focus:ring-blue-600"
        />

        <button type="submit">
          <Search
            className="absolute right-3  top-2.5 text-gray-400 hover:text-gray-300 
            hover:scale-150  hover:transition "
            size={20}
          />
        </button>
      </form>
    </>
  );
};
export default SearchBar;
