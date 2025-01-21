"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import Discover from "./Discover";
import HelpCenter from "./HelpCenter";
import Notification from "./Notification";
import Profile from "./Profile";
import Sidebar from "./Sidebar"; // Import Sidebar

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(""); // Keeps track of the active dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for detecting outside clicks

  // Function to handle dropdown toggle
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? "" : dropdown));
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <nav className="w-full bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="text-2xl">
              {isSidebarOpen ? <CgMenuRight /> : <CgMenuLeft />}
            </button>
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Center Section */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                className="hover:underline"
                onClick={() => toggleDropdown("discover")}
              >
                Discover
              </button>
              {activeDropdown === "discover" && (
                <div className="absolute top-full mt-2 z-50">
                  <Discover />
                </div>
              )}
            </div>
            <button
              className="hover:underline"
              onClick={() => toggleDropdown("help")}
            >
              Help Center
            </button>
            {activeDropdown === "help" && (
              <div className="absolute top-full mt-2 z-50">
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-full text-black"
              />
              <button className="absolute top-0 right-0 h-full pr-4">
                <BsSearch />
              </button>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button onClick={() => toggleDropdown("notification")}>
                <MdNotifications size={24} />
              </button>
              {activeDropdown === "notification" && (
                <div className="absolute top-full right-0 mt-2 w-80">
                  <Notification />
                </div>
              )}
            </div>

            {/* Profile Icon */}
            <div className="relative">
              <button onClick={() => toggleDropdown("profile")}>
                <span className="rounded-full bg-gray-600 p-2">P</span>
              </button>
              {activeDropdown === "profile" && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg p-4 z-50">
                  <Profile />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
    </div>
  );
};

export default Navbar;
