




import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../../assets/logo_05.png";
import logo from "../../../assets/Icons/Logo_white.png";
import profile from "../../../assets/ProfileSetting.png";
import { useSelector } from "react-redux";
import sellerIcon from "../../../assets/Dashboard_icon.png";
import chatIcon from "../../../assets/Dashboard_icon.png";
import customerIcon from "../../../assets/Dashboard_icon.png";
import ordersIcon from "../../../assets/Dashboard_icon.png";
import orderListIcon from "../../../assets/Dashboard_icon.png";
import customerListIcon from "../../../assets/Dashboard_icon.png";
import orderDetailsIcon from "../../../assets/Dashboard_icon.png";

function AdminSidebar() {

  let navigate = useNavigate();
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isSellerDropdownOpen, setIsSellerDropdownOpen] = useState(false);
  const [isChatDropdownOpen, setIsChatDropdownOpen] = useState(false);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  const toggleSellerDropdown = () => {
    setIsSellerDropdownOpen(!isSellerDropdownOpen);
    setIsChatDropdownOpen(false);
    setIsCustomerDropdownOpen(false);
  };

  const toggleChatDropdown = () => {
    setIsChatDropdownOpen(!isChatDropdownOpen);
    setIsSellerDropdownOpen(false);
    setIsCustomerDropdownOpen(false);
  };

  const toggleCustomerDropdown = () => {
    setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
    setIsSellerDropdownOpen(false);
    setIsChatDropdownOpen(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [

    {
      label: "Dashboard",
      icon: sellerIcon,
    },

    {
      label: "Banners",
      icon: sellerIcon,
      isOpen: isSellerDropdownOpen,
      toggleDropdown: toggleSellerDropdown,
      links: [
        { to: '/pharmEtradeadmin/AdminBanners', label: 'AdminBanners', icon: orderListIcon }
      ]
    },


    {
      label: "Seller",
      icon: sellerIcon,
      isOpen: isSellerDropdownOpen,
      toggleDropdown: toggleSellerDropdown,
      links: [

        { to: "/pharmEtradeadmin/sellerList", label: "Seller List", icon: orderListIcon },
      ],
    },
    // {
    //   label: "Chat",
    //   icon: chatIcon,
    //   isOpen: isChatDropdownOpen,
    //   toggleDropdown: toggleChatDropdown,
    //   links: [
    //     { to: "/admin/chat/all-chats", label: "All Chats", icon: chatIcon },
    //     { to: "/admin/chat/new-chat", label: "New Chat", icon: chatIcon },
    //   ],
    // },
    {
      label: "Customer",
      icon: customerIcon,
      isOpen: isCustomerDropdownOpen,
      toggleDropdown: toggleCustomerDropdown,
      links: [
        { to: "/pharmEtradeadmin/customerList", label: "Customer List", icon: customerListIcon },
        // { to: "/admin/customer/orders", label: "Customer Orders", icon: ordersIcon },
      ],
    },
  ];

  return (
    <div
      className={`p-2 overflow-scroll h-full w-full z-[100] font-normal font-sans flex flex-col  shadow-lg ${isCollapsed ? "min-w-16 items-center" : "min-w-64"
        }`}
      style={{ backgroundColor: "rgba(14, 81, 140, 1)" }}
    >
      <div className="w-full flex flex-col justify-center items-center my-5">
        <Link to="">
          <img src={logo} className="w-44 mb-2" alt="Logo" />
        </Link>
        <div className="flex w-40 h-28 justify-center items-center border rounded-md bg-white">
          <div className="flex justify-center flex-col items-center">
            <img
              src={profile}
              className="w-10 h-10 rounded-full "
              alt="Profile"
            />
            <p className="text-base text-red-500 font-semibold my-1">
              Admin
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* <div className="flex medium:hidden items-center justify-end p-2">
        <button
          onClick={toggleCollapse}
          className="text-gray-700 hover:text-blue-900"
        >
          {isCollapsed ? (
            <FaBars className="w-6 h-6" />
          ) : (
            <FaTimes className="w-6 h-6" />
          )}
        </button>
      </div>
      <nav className="space-y-2 text-[16px]">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.label && item.links ? (
              <div
                className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                onClick={item.toggleDropdown}
              >
                <div className="flex items-center">
                  <img src={item.icon} className="w-6 h-6" alt={item.label} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </div>
                {!isCollapsed &&
                  (item.isOpen ? (
                    <FaChevronUp
                      className={`mr-2 ${
                        item.links.length > 0 ? "" : "hidden"
                      }`}
                    />
                  ) : (
                    <FaChevronDown
                      className={`mr-2 ${
                        item.links.length > 0 ? "" : "hidden"
                      }`}
                    />
                  ))}
              </div>
            ) : (
              <Link
                to={item.to}
                onClick={() => handleClick(item.to)}
                className={`flex items-center p-2 ${
                  activeLink === item.to
                    ? "text-white bg-gray-400"
                    : "text-white"
                } hover:text-white hover:bg-gray-400`}
              >
                <img src={item.icon} className="w-6 h-6" alt={item.label} />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            )}
            {item.isOpen && !isCollapsed && item.links && (
              <ul className="ml-6">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      onClick={() => handleClick(link.to)}
                      className={`flex items-center p-2 ${
                        activeLink === link.to
                          ? "text-white bg-gray-400"
                          : "text-white"
                      } hover:text-white hover:bg-gray-400`}
                    >
                      <img src={link.icon} className="w-4 h-4" alt={link.label} />
                      <span className="ml-3">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav> */}

        <div>
          <div className="flex medium:hidden items-center justify-end p-2">
            <button
              onClick={toggleCollapse}
              className="text-gray-700 hover:text-blue-900"
            >
              {isCollapsed ? (
                <FaBars className="w-6 h-6" />
              ) : (
                <FaTimes className="w-6 h-6" />
              )}
            </button>
          </div>
          <nav className="space-y-2 text-[16px]">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.label && item.links ? (
                  <div
                    className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                    onClick={item.toggleDropdown}
                  >
                    <div className="flex items-center">
                      <img src={item.icon} className="w-6 h-6" alt={item.label} />
                      {!isCollapsed && <span className="ml-3">{item.label}</span>}
                    </div>
                    {!isCollapsed &&
                      (item.isOpen ? (
                        <FaChevronUp
                          className={`mr-2 ${item.links.length > 0 ? "" : "hidden"
                            }`}
                        />
                      ) : (
                        <FaChevronDown
                          className={`mr-2 ${item.links.length > 0 ? "" : "hidden"
                            }`}
                        />
                      ))}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => handleClick(item.to)}
                    className={`flex items-center p-2 ${activeLink === item.to
                        ? "text-white bg-gray-400"
                        : "text-white"
                      } hover:text-white hover:bg-gray-400`}
                  >
                    <img src={item.icon} className="w-6 h-6" alt={item.label} />
                    {!isCollapsed && <span className="ml-3">{item.label}</span>}
                  </Link>
                )}
                {item.isOpen && !isCollapsed && item.links && (
                  <ul className="ml-6">
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          to={link.to}
                          onClick={() => handleClick(link.to)}
                          className={`flex items-center p-2 ${activeLink === link.to
                              ? "text-white bg-gray-400"
                              : "text-white"
                            } hover:text-white hover:bg-gray-400`}
                        >
                          <img src={link.icon} className="w-4 h-4" alt={link.label} />
                          <span className="ml-3">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>


      </div>

    </div>
  );
}

export default AdminSidebar;


