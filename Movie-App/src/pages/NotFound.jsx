import React from "react";
import "../css/Notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>404 Not Found</p>
      <div className="centere">
        <h2>Opps! Page Not Found</h2>
        <p>
          The page you are looking for doesn't exist. Click <br />
          button bellow to go to the homepage.
        </p>
      </div>
      <Link to="/" className="nav-home">
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
