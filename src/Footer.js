import React from "react";

const footLogo = [
  {
    logoName: "email",
    logoImg: "img/footer/email.png",
    link: "https://mail.google.com/",
  },
  {
    logoName: "linkedin",
    logoImg: "img/footer/linkedin.png",
    link: "https://pk.linkedin.com/",
  },
  {
    logoName: "github",
    logoImg: "img/footer/github3.png",
    link: "https://github.com/",
  },
];
const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footerLogoBox">
        {footLogo.map((logo, i) => (
          <div className="footerLogo" key={i}>
            <a href={logo.link}>
              <img src={logo.logoImg} alt={logo.logoName} />
            </a>
          </div>
        ))}
      </div>
      <p className="footerText">&copy; 2024 Chris Chin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
