import React from 'react';
import Image from 'next/image';
import { FaUserAlt, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownloadOff, TbDownload } from 'react-icons/tb';
import Link from 'next/link';

export const Profile = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>
      <div className="space-y-6">
        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative w-24 h-24">
            <Image
              src="/img/user1.png"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-700">John Doe</h2>
        </div>

        {/* Profile Actions */}
        <div className="space-y-2">
          <Link 
            href="/profile/view"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 w-full"
          >
            <FaUserAlt className="text-gray-500 text-lg" />
            <span>View Profile</span>
          </Link>

          <Link 
            href="/profile/edit"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 w-full"
          >
            <FaUserEdit className="text-gray-500 text-lg" />
            <span>Edit Profile</span>
          </Link>

          <Link 
            href="/profile/help"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 w-full"
          >
            <MdHelpCenter className="text-gray-500 text-lg" />
            <span>Help Center</span>
          </Link>

          <button 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 w-full"
            onClick={() => console.log('Disconnect')}
          >
            <TbDownloadOff className="text-gray-500 text-lg" />
            <span>Disconnect</span>
          </button>

          <button 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 w-full"
            onClick={() => console.log('Download Data')}
          >
            <TbDownload className="text-gray-500 text-lg" />
            <span>Download Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;