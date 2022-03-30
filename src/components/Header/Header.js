import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Let's Quiz
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
