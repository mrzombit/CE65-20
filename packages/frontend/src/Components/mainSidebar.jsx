import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { mainSidebarData } from "./mainSidebarData";
import "./mainSidebar.css";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";


function mainSidebar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" style={{marginBottom : '7.5rem'}}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="/ProfilePage" className="menu-bars mb-4">
            <IoIcons.IoIosPaper />
          </Link>
          <Link to="/" className="menu-bars mb-4">
            <IoIcons.IoIosPaper />
          </Link>
          <Link to="/WorkSpacePage" className="menu-bars mb-4">
            <IoIcons.IoIosPaper />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {/* <ul className='nav-menu-items' onClick={showSidebar}> */}
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              {/* <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link> */}
            </li>
            {mainSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default mainSidebar;
