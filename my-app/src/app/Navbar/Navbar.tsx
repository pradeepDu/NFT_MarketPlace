"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
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

        <div className="flex items-center gap-4">
          <button onClick={() => setNotification(!notification)}>
            <MdNotifications size={24} />
          </button>
          <button onClick={() => setProfile(!profile)}>
            <span className="rounded-full bg-gray-600 p-2">P</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
