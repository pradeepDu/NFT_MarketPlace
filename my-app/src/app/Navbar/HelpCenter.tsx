import React from 'react';
import Link from 'next/link';

const HelpCenter = () => {
  const helpcenter = [
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact us" },
    { name: "Sign Up", link: "/sign up" },
    { name: "Sign In", link: "/sign in" },
    { name: "Subscription", link: "/subscribe" },
    
    
  ];
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        How can we help you?
      </h2>
      <nav className="space-y-2">
        {helpcenter.map((item, index) => (
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

export default HelpCenter;
