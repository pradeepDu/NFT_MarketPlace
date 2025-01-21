import React, { useState, useEffect, useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube, TiSocialTwitter, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Button from '../Button';

interface SidebarItem {
  name: string;
  link: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openDiscover, setOpenDiscover] = useState<boolean>(false);
  const [openHelp, setOpenHelp] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement>(null); // Ref to detect clicks outside the sidebar

  const discover: SidebarItem[] = [
    { name: "Collection", link: "/collection" },
    { name: "Search", link: "/search" },
    { name: "Author Profile", link: "/author-profile" },
    { name: "NFT Details", link: "/nft-details" },
    { name: "Account Settings", link: "/account-settings" },
    { name: "Connect Wallet", link: "/connect-wallet" },
    { name: "Blog", link: "/blog" },
  ];

  const helpcenter: SidebarItem[] = [
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Sign Up", link: "/sign-up" },
    { name: "Sign In", link: "/sign-in" },
    { name: "Subscription", link: "/subscribe" },
  ];

  const toggleDiscover = () => setOpenDiscover(prev => !prev);
  const toggleHelp = () => setOpenHelp(prev => !prev);

  // Close the sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose(); // Close the sidebar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white shadow-lg z-50 transition-transform ${isOpen ? 'transform-none' : '-translate-x-full'}`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <GrClose className="text-2xl text-white" />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Discover</h2>
        <div>
          <button
            className="flex items-center justify-between w-full text-white"
            onClick={toggleDiscover}
          >
            <span>Discover</span>
            {openDiscover ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {openDiscover && (
            <ul className="space-y-2 mt-2">
              {discover.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-white hover:text-blue-500">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-6">Help Center</h2>
        <div>
          <button
            className="flex items-center justify-between w-full text-white"
            onClick={toggleHelp}
          >
            <span>Help Center</span>
            {openHelp ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {openHelp && (
            <ul className="space-y-2 mt-2">
              {helpcenter.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-white hover:text-blue-500">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-white hover:text-blue-500">
            <TiSocialFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <TiSocialInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <TiSocialYoutube className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <TiSocialTwitter className="text-2xl" />
          </a>
        </div>

        {/* Button */}
        <Button className="mt-6">Some Action</Button>
      </div>
    </div>
  );
};

export default Sidebar;
