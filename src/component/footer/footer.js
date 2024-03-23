import React from "react";
import "./footer.css";
import image from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagramsd from "../../images/icon-instagram.svg";
const Footer = () => {
  const ul = [
    {
      ul: "Features",
      li: "Link Shortening",
      li1: "Branded Links",
      li2: "Analytics",
    },
    {
      ul: "Resources",
      li: "Blog",
      li1: "Developers",
      li2: "Support",
    },
    {
      ul: "Company",
      li: "About",
      li1: "Our Team",
      li2: "Contact",
    },
  ];
  return (
    <div>
      {/* __________________header of the footer__________________ */}
      <div className="headerFooter">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
      <div className="Footer">
        <div className="FooterStyle">
          {/* _________logo img_____________________ */}
          <div>
            <img src={image} className="ss" alt="" srcset="" />
          </div>
          {/* _____________list component_______________________ */}
          <div className="list">
            {ul.map((item) => {
              return (
                <div key={item} className="list">
                  <ul className="list1">
                    <ul> {item.ul}</ul>
                    <li>{item.li}</li>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                  </ul>
                </div>
              );
            })}
          </div>
          {/* ____________icons_______________________ */}
          <div className="icon">
            <img src={facebook} alt="" />
            <img src={instagramsd} alt="" />
            <img src={pinterest} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
