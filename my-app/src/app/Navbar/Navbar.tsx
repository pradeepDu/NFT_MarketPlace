"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import Discover from "./Discover";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <div className="relative">
      <nav className="w-full bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpenSideMenu(!openSideMenu)}
              className="text-2xl"
            >
              {openSideMenu ? <CgMenuRight /> : <CgMenuLeft />}
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
                onClick={() => setDiscover(!discover)}
              >
                Discover
              </button>
              {discover && (
                <div className="absolute top-full mt-2 z-50">
                  <Discover />
                </div>
              )}
            </div>
            <Link
              href="#"
              className="hover:underline"
              onClick={() => setHelp(!help)}
            >
              Help Center
            </Link>
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

            <button onClick={() => setNotification(!notification)}>
              <MdNotifications size={24} />
            </button>
            <button onClick={() => setProfile(!profile)}>
              <span className="rounded-full bg-gray-600 p-2">P</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;