
import React from "react";
import Image from "next/image";

const Notification = () => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Notifications</h2>
      <div className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg">
        <div className="w-12 h-12">
          <Image
            src="/img/user1.png"
 // Ensure user1 exists in the images module
            alt="User Avatar"
            className="rounded-full"
            width={48}
            height={48}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">John Doe</h3>
          <p className="text-sm text-gray-600">You have a new message.</p>
          <span className="text-xs text-gray-500">5 minutes ago</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
