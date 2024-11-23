import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../../assets/logo_05.png";
import logo from "../../../assets/Icons/Logo_white.png";
import profile from "../../../assets/ProfileSetting.png";
import { useSelector } from "react-redux";
import { logoutUserApi } from "../../../Api/UserApi";

function LayoutSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const [navItems, setnavItems] = useState([]);
  const user = useSelector((state) => state.user.user);
  const businessInfo = useSelector((state) => state.user.businessInfo);
  console.log("bbbbbb", businessInfo);

  const menuItems = useSelector((state) => state.user.menuItems);
  console.log(user);
  console.log("bbbbbghgvhg", businessInfo);
  console.log(menuItems, "menu");
  useEffect(() => {
    if (menuItems) {
      const navItems = buildNavItems(menuItems);
      setnavItems(navItems);
    }
  }, [menuItems]);

  console.log(navItems);

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  const toggleDropdown = (section) => {
    setDropdownStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logos = {
    src: profile,
    name: user?.firstName + " " + user?.lastName,
    // Shop_name: "Valley Pharmacy",
    Shop_name: businessInfo?.shopName,
  };
  const buildNavItems = (menuItems) => {
    // Step 1: Organize menu items by their parent property
    const menuMap = {};
    menuItems.forEach((item) => {
      const { parent } = item;
      if (!menuMap[parent]) {
        menuMap[parent] = [];
      }
      menuMap[parent].push(item);
    });

    // Step 2: Function to recursively build the navigation structure
    const createNavItem = (menuItem) => {
      const children = menuMap[menuItem.menuId] || [];

      return {
        label: menuItem.menuName,
        icon: menuItem.iconPath, // Replace with appropriate icons or map menuName to icons
        to: menuItem.navigateUrl || null,
        ...(children.length > 0 && { children: children.map(createNavItem) }),
      };
    };

    // Step 3: Build navItems from top-level menu items
    const navItems = menuMap[0]?.map(createNavItem) || [];

    return navItems;
  };
  const handleLogout = () => {
    logoutUserApi();
    navigate("/");
  };

  const [isMobileOpen, setIsMobileOpen] = useState(false); // State for mobile toggle

  const handleSidebarToggle = () => {
    setIsMobileOpen(!isMobileOpen); // Toggle sidebar visibility on mobile
  };
  return (
    <>
      {/* Mobile and Tablet Menu Button (hamburger/back icon) */}
      <div className="lg:hidden flex items-center p-4">
        <button onClick={handleSidebarToggle} className="text-white">
          {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`p-2 overflow-scroll h-full z-[100] font-normal font-sans flex flex-col shadow-lg fixed top-0 left-0 transform lg:transform-none lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:block ${
          isCollapsed ? "min-w-16 items-center" : "min-w-64"
        } w-64 max-w-full`}
        style={{ backgroundColor: "rgba(14, 81, 140, 1)" }}
      >
        {/* Back Icon for Closing the Sidebar on Mobile and Medium screens */}
        <div className="lg:hidden fixed top-5 left-5 z-[105]">
          {isMobileOpen && (
            <button onClick={handleSidebarToggle} className="text-white">
              <FaTimes size={16} />
            </button>
          )}
        </div>

        {/* Sidebar content */}
        <div className="w-full flex flex-col justify-center items-center my-5">
          <Link to="/app">
            <img src={logo} className="w-44 mb-2" alt="Logo" />
          </Link>
          <div className="flex w-40 h-28 justify-center items-center border rounded-md bg-white">
            <div className="flex justify-center flex-col items-center">
              <img
                src={logos.src}
                className="w-10 h-10 rounded-full"
                alt="Profile"
              />
              <p className="text-xs text-red-500 font-semibold my-1">
                {logos.Shop_name}
              </p>
              <div className="flex items-center">
                {user?.isUPNMember === 1 && (
                  <span className="mr-1 inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                )}
                <p className="text-sm font-semibold">{logos.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 text-[16px]">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <div
                  className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <div className="flex font-semibold text-[15px] items-center">
                    <img src={item.icon} className="w-6 h-6" alt={item.label} />
                    {!isCollapsed && <span className="ml-3">{item.label}</span>}
                  </div>
                  {!isCollapsed &&
                    (dropdownStates[item.label] ? (
                      <FaChevronUp className="mr-2" />
                    ) : (
                      <FaChevronDown className="mr-2" />
                    ))}
                </div>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => {
                    handleClick(item.to);
                    setIsMobileOpen(false);
                  }}
                  className={`flex items-center font-semibold text-[15px] p-2 ${
                    activeLink === item.to
                      ? "text-white bg-gray-400"
                      : "text-white"
                  } hover:text-white hover:bg-gray-400`}
                >
                  <img src={item.icon} className="w-6 h-6" alt={item.label} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              )}
              {dropdownStates[item.label] && item.children && (
                <ul className="ml-6">
                  {item.children.map((child, idx) => (
                    <li key={idx}>
                      {child.children ? (
                        <div>
                          <div
                            className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                            onClick={() => toggleDropdown(child.label)}
                          >
                            <div className="flex font-semibold text-[15px] items-center">
                              <img
                                src={child.icon}
                                className="w-4 h-4"
                                alt={child.label}
                              />
                              <span className="ml-3">{child.label}</span>
                            </div>
                            {dropdownStates[child.label] ? (
                              <FaChevronUp className="mr-2" />
                            ) : (
                              <FaChevronDown className="mr-2" />
                            )}
                          </div>
                          {dropdownStates[child.label] && (
                            <ul className="ml-6">
                              {child.children.map((subChild, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    to={subChild.to}
                                    onClick={() => {
                                      handleClick(subChild.to);
                                      setIsMobileOpen(false);
                                    }}
                                    className={`flex items-center font-normal text-[15px] p-2 ${
                                      activeLink === subChild.to
                                        ? "text-white bg-gray-400"
                                        : "text-white"
                                    } hover:text-white hover:bg-gray-400`}
                                  >
                                    <img
                                      src={subChild.icon}
                                      className="w-4 h-4"
                                      alt={subChild.label}
                                    />
                                    <span className="ml-3">
                                      {subChild.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={child.to}
                          onClick={() => {
                            handleClick(child.to);
                            setIsMobileOpen(false);
                          }}
                          className={`flex items-center font-normal text-[15px] p-2 ${
                            activeLink === child.to
                              ? "text-white bg-gray-400"
                              : "text-white"
                          } hover:text-white hover:bg-gray-400`}
                        >
                          <img
                            src={child.icon}
                            className="w-4 h-4"
                            alt={child.label}
                          />
                          <span className="ml-3">{child.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          className="text-white w-56 bg-red-600 p-2 rounded-lg font-semibold"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default LayoutSidebar;
