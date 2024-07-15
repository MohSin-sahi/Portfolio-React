import React from "react";

const footLogo = [
  { logoName: "email", logoImg: "img/footer/email.png" },
  { logoName: "linkedin", logoImg: "img/footer/linkedin.png" },
  { logoName: "github", logoImg: "img/footer/github3.png" },
];
const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footerLogoBox">
        {footLogo.map((logo, i) => (
          <div className="footerLogo" key={i}>
            <img src={logo.logoImg} alt={logo.logoName} />
          </div>
        ))}
      </div>
      <p className="footerText">&copy; 2024 Chris Chin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
