import React from 'react';
import Link from 'next/link';

const Discover = () => {
  const discover = [
    { name: "Collection", link: "/collection" },
    { name: "Search", link: "/search" },
    { name: "Author Profile", link: "/author-profile" },
    { name: "NFT Details", link: "/nft-details" },
    { name: "Account Settings", link: "/account-settings" },
    { name: "Connect Wallet", link: "/connect-wallet" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Discover
      </h2>
      <nav className="space-y-2">
        {discover.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block w-full p-3 rounded-lg text-gray-300 
                     relative overflow-hidden
                     transition-all duration-300 ease-in-out
                     hover:text-white hover:translate-x-2
                     hover:bg-purple-600/20
                     hover:shadow-lg hover:shadow-purple-500/10"
          >
            <span className="relative z-10 font-medium">{item.name}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 
                          transition-opacity duration-300 opacity-0 
                          hover:opacity-20" />
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Discover;