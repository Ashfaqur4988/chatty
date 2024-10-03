import { Settings, LogOut } from "lucide-react";
import { useState } from "react";
import useLogOut from "../../hooks/useLogOut";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useLogOut();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="h-10 w-12" />
          <span className="text-xl font-bold">Chatty</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <Settings className="h-6 w-6" />
          </button>
          <button
            className="p-2 hover:bg-gray-700 rounded-full"
            onClick={handleLogout}
          >
            <LogOut className="h-6 w-6" />
          </button>
          <img
            src={
              currentUser.profilePic ? currentUser.profilePic : "/noavatar.jpg"
            }
            alt="Profile"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
          <span>{currentUser.username}</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Settings className="h-6 w-6" />
              <span>Settings</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
            >
              <LogOut className="h-6 w-6" />
              <span>Logout</span>
            </button>
            <div className="flex items-center space-x-2 p-2">
              <img
                src={
                  currentUser.profilePic
                    ? currentUser.profilePic
                    : "/noavatar.jpg"
                }
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
              <span>{currentUser.username}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
