import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
  const businessInfo = useSelector((state)=>state.user.businessInfo);
  console.log("bbbbbb", businessInfo)

  const menuItems = useSelector((state)=>state.user.menuItems);
  console.log(user);
  console.log("bbbbbghgvhg",businessInfo)
  console.log(menuItems,"menu");
  useEffect(() => {
    if(menuItems)
    {
      const navItems = buildNavItems(menuItems);
      setnavItems(navItems);
    }
  }, [menuItems])
  
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
    name:
      user?.firstName +
      " " +
      user?.lastName,
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
    navigate('/')
  };

  return (
    <div
      className={`p-2 overflow-scroll h-full w-full z-[100] font-normal font-sans flex flex-col  shadow-lg ${
        isCollapsed ? "min-w-16 items-center" : "min-w-64"
      }`}
      style={{ backgroundColor: "rgba(14, 81, 140, 1)" }}
    >
      <div className="w-full flex flex-col justify-center items-center my-5">
        <Link to="/app">
          <img src={logo} className="w-44 mb-2" alt="Logo" />
        </Link>
        <div className="flex w-40 h-28 justify-center items-center border rounded-md bg-white">
          <div className="flex justify-center flex-col items-center">
            <img
              src={logos.src}
              className="w-10 h-10 rounded-full "
              alt="Profile"
            />
            <p className="text-xs text-red-500 font-semibold my-1">
              {logos.Shop_name}
            </p>
            <p className=" text-sm font-semibold">{logos.name}</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2 text-[16px]">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <div
                className="flex items-center justify-between p-2 text-white  hover:bg-gray-400 cursor-pointer"
                onClick={() => toggleDropdown(item.label)}
              >
                <div className="flex font-semibold text-[15px] items-center">
                  <img src={item.icon} className="w-6 h-6" alt={item.label} />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </div>
                {!isCollapsed &&
                  (dropdownStates[item.label] ? (
                    <FaChevronUp className={`mr-2`} />
                  ) : (
                    <FaChevronDown className={`mr-2`} />
                  ))}
              </div>
            ) : (
              <Link
                to={item.to}
                onClick={() => handleClick(item.to)}
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
                                  onClick={() => handleClick(subChild.to)}
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
                                  <span className="ml-3">{subChild.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={child.to}
                        onClick={() => handleClick(child.to)}
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
      {/* <button className="text-white bg-red-600 p-2 rounded-lg font-semibold">Logout</button> */}
      <button
        className="text-white bg-red-600 p-2 rounded-lg font-semibold"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LayoutSidebar;
