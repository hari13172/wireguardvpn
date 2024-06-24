import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";
import Card from "./Card";
import WireGuard from "../pages/WireGuard";

interface MenuItem {
  id: number;
  icon: JSX.Element;
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    icon: <FaApple className="text-[1.75rem]" />,
    name: "WireGuard",
    path: "/wireguard",
  },
  {
    id: 2,
    icon: <FaApple className="text-[1.75rem]" />,
    name: "VPN",
    path: "/vpn",
  },
  {
    id: 3,
    icon: <FaApple className="text-[1.75rem]" />,
    name: "Terminal",
    path: "/terminal",
  },
  {
    id: 4,
    icon: <FaApple className="text-[1.75rem]" />,
    name: "Personal VPN",
    path: "/personal-vpn",
  },
  {
    id: 5,
    icon: <FaApple className="text-[1.75rem]" />,
    name: "Details",
    path: "/details",
  },
  {
    id: 6,
    icon: <FaApple className="text-[1.75rem]" />,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 7,
    icon: <FaApple className="text-[1.75rem]" />,
    name: "BrandName",
    path: "/brandname",
  },
];

const SideBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-[100vh] flex overflow-x-hidden relative w-full bg-red-800  ">
      <div
        className={`fixed h-full bg-blue-700 overflow-hidden transition-all duration-300`}
        style={{ width: isExpanded ? "300px" : "85px" }}
      >
        <div className="flex items-center p-6 mb-10">
          <FaApple className="text-[2rem] text-white mr-4 flex-shrink-0" />
          <span
            className={`text-white text-2xl font-bold transition-opacity duration-300 ${
              !isExpanded ? "opacity-0" : "opacity-100"
            }`}
          >
            BrandLogo
          </span>
        </div>
        <ul className="ml-5 absolute left-0 w-full flex flex-col gap-5">
          {menuItems.map((item) => (
            <li key={item.id} className="relative w-full list-none">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center w-full p-2 relative a-hover transition-colors duration-300 ${
                    isActive
                      ? "bg-white text-blue-700 rounded-tl-[30px] rounded-bl-[30px] active"
                      : "text-white"
                  }`
                }
              >
                <span className="relative block w-[40px] text-center leading-[60px]">
                  {item.icon}
                </span>
                {isExpanded && (
                  <span className="leading-[40px] ml-4">{item.name}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full ml-auto" style={{ marginLeft: isExpanded ? "300px" : "85px" }}>
        <TopBar onMenuClick={handleMenuClick} isExpanded={isExpanded} />
        <div className="p-28">
          <Card />
          {/* <WireGuard /> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
