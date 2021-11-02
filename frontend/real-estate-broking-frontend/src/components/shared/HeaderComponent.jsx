import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Real Estate Broking Application
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
