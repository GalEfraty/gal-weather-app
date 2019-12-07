import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className=" container-fluid text-white bg-primary fixed-bottom footer-wrapper">
      <p className="font-weight-light footer_my-name">Gal Efraty </p>
      <a
        href="https://www.linkedin.com/in/gal-efraty-b0a422150"
        className="text-decoration-none text-white"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/GalEfraty"
        className="text-decoration-none text-white"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.facebook.com/galefraty"
        className="text-decoration-none text-white"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
      <a
        href="https://www.instagram.com/galefraty/"
        className="text-decoration-none text-white"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </footer>
  );
};

export default Footer;
