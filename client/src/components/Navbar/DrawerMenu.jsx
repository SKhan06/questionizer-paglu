import { useState } from "react";
import { Menu } from "lucide-react"; // Menu icon from lucide-react
import menuLogo from "../../assets/menu-logo.jpg"; // Your logo path

export default function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between">
      {/* Menu Button */}
      <button
        className="p-2 rounded-md hover:bg-gray-100 transition"
        onClick={toggleDrawer}
      >
        <Menu size={24} />
      </button>

      <img
        src={menuLogo} // your logo path
        alt="Logo"
        className="h-8 w-auto mr-2"
      />
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={toggleDrawer}
            className="text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>

        <ul className="p-4 space-y-3">
          <li>
            <a href="/" className="block hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-600">
              Question
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-blue-600">
              Tags
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-blue-600">
              Users
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="/contact-us" className="block hover:text-blue-600">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
