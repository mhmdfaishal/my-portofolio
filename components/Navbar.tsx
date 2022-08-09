import type { NextPage } from "next";
import { useState } from "react";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.png";
import Logo from "../assets/mylogo.png";
import InvertLogo from "../assets/mylogo_invert.png";
interface INavbarProps {
  onNavItemClick: (item: string) => void;
  switchTheme: () => void;
  theme: string;
}

export const Navbar: NextPage<INavbarProps> = ({
  onNavItemClick = () => {},
  switchTheme = () => {},
  theme,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line line1"}></div>
          <div className={showSidebar ? "line line-2" : "line line2"}></div>
          <div className={showSidebar ? "line line-3" : "line line3"}></div>
        </div>
        <div className="navbar_logo">
          {theme === "light" ? (
            <img src={Logo.src} alt="logo" />
          ) : (
            <img src={InvertLogo.src} alt="logo" />
          )}
        </div>

        <div className="navbar_list">
          <p className="navbar_list_item" onClick={() => onNavItemClick("about")}>
            About
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("jobs")}>
            Experiences
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("projects")}>
            Works
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("skills")}>
            Skills
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("contact")}>
            Contact
          </p>
        </div>

        <div className="navbar_switch_mode">
          <p className="navbar_name">
            <img src={theme === "light" ? Sun.src : Moon.src} alt="" onClick={switchTheme} />
          </p>
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick("about")}>
          About
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("jobs")}>
          Experiences
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("projects")}>
          Works
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("skills")}>
          Skills
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("contact")}>
          Contact
        </p>
      </div>
    </>
  );
};
