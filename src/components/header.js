import React from "react";
import Link from "gatsby-link";
import github_logo from "../images/logo-white.png";

const Header = ({ siteTitle }) => (
  <div>
    <div className="background-hero"></div>
    <div className="container">
      <div className="nav">
        <div className="brand-text">{siteTitle}</div>
        <div className="github-logo">
          <a
            className="github-button"
            href="https://github.com/Zubi-io"
            data-size="large"
            aria-label="Follow @Zubi-io on GitHub"
          >
            Follow
          </a>
          <a target="_blank" href="https://github.com/Zubi-io">
            <img alt="github-logo" src={github_logo} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
