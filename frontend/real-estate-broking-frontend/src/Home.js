import React, { Component } from "react";
import "./App.css";
// import AppNavbar from './AppNavbar';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          <Link to="/brokers">Brokers</Link>
        </h3>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <Link to="/properties">Properties</Link>
        </h3>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <Link to="/customers">Customers</Link>
        </h3>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <Link to="/search-property">Search property</Link>
        </h3>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <Link to="/view-booking">Bookings</Link>
        </h3>
        <br></br>
      </div>
    );
  }
}

export default Home;
