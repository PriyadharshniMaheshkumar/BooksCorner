import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="tabcontent">
      <div className="tabitem">
        <Link to="/">HOME</Link>
      </div>
      <div className="tabitem">
        <Link to="/authors">AUTHORS</Link>
      </div>
      <div className="tabitem">
        <Link to="/books">BOOKS</Link>
      </div>
      <div className="tabitem">
        <Link to="/about">ABOUT US</Link>
      </div>
      <div className="tabitem">
        <Link to="/signup">SIGN UP</Link>
      </div>
      <div className="tabitem">
        <Link to="/login">LOGIN</Link>
      </div>
    </div>
  );
};
