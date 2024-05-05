import React, { useState } from "react";
import "./styles.css";
import logo from "../resources/logo.png";
import menu from "../resources/menu.png";
import useScreenSize from "../../hooks/useScreenSize";

const Header = () => {
  const screenSize = useScreenSize();
  const [linkSelected, setLinkSelected] = useState({
    mainLink: false,
    contactLink: false,
  });

  const handleOnSelection = (linkType) => {
    setLinkSelected({
      mainLink: linkType === "main" ? true : false,
      contactLink: linkType === "main" ? false : true,
    });
  };

  // console.log("linkSelected", linkSelected);

  return (
    <div className="mainNavBar-container">
      <div className="navBar-container">
        <img className="logo-img" src={logo} />
        {screenSize.width < 820 && <img className="menu-img" src={menu} />}
        {screenSize.width >= 820 && (
          <div className="links-wrapper">
            <div
              className={`${
                linkSelected.mainLink && "border-underline"
              } mainPage-link`}
            >
              <a
                className={!linkSelected.mainLink && "disabled-color"}
                onClick={() => handleOnSelection("main")}
              >
                الصفحة الرئيسية
              </a>
            </div>
            <div
              className={`${
                linkSelected.contactLink && "border-underline"
              } contactUs-link`}
            >
              <a
                className={!linkSelected.contactLink && "disabled-color"}
                onClick={() => handleOnSelection("contact")}
              >
                تواصل معانا
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
