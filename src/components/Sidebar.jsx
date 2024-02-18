import { useState } from "react";
import {
  FaTh,
  FaBars
} from "react-icons/fa";

import { SiDotnet } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaJava } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children })  => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/cpp",
      name: "CPP",
      icon: <FaJava />,
    },
    {
      path: "/java",
      name: "JAVA",
      icon: <FaJava />,
    },
    {
      path: "/wpt",
      name: "Web programming",
      icon: <FaNodeJs />,
    },
    {
      path: "/database",
      name: "Database",
      icon: <FaDatabase />,
    },
    {
      path: "/advjava",
      name: "Advance Java",
      icon: <SiSpringboot />,
    },
    {
      path: "/dsa",
      name: "Data Structure and Algorithem",
      icon: <FaJava />,
    },
    {
      path: "/sda",
      name: "SDM",
      icon: <SiAzuredevops />,
    },
    {
      path: "/dotnet",
      name: "DotNet",
      icon: <SiDotnet />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "322px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
