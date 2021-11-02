import React from "react";
import "./App.css";
import HeaderComponent from "./components/shared/HeaderComponent";
import FooterComponent from "./components/shared/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPropertyComponent from "./components/property/SearchPropertyComponent";
import CreateBrokerComponent from "./components/broker/CreateBrokerComponent";
import ListBrokerComponent from "./components/broker/ListBrokerComponent";
import UpdateBrokerComponent from "./components/broker/UpdateBrokerComponent";
import ViewBrokerComponent from "./components/broker/ViewBrokerComponent.jsx";
import CreatePropertyComponent from "./components/property/CreatePropertyComponent";
import ListPropertyComponent from "./components/property/ListPropertyComponent";
import UpdatePropertyComponent from "./components/property/UpdatePropertyComponent";
import ViewPropertyComponent from "./components/property/ViewPropertyComponent";
import CreateCustomerComponent from "./components/customer/CreateCustomerComponent";
import UpdateCustomerComponent from "./components/customer/UpdateCustomerComponent";
import ViewCustomerComponent from "./components/customer/ViewCustomerComponent";
import Home from "./Home";
import ListBookingComponent from "./components/book/ListBookingComponent";
import CreateBookingComponent from "./components/book/CreateBookingComponent";
import ListCustomerComponent from "./components/customer/ListCustomerComponent";
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/brokers" component={ListBrokerComponent}></Route>
            <Route path="/properties" component={ListPropertyComponent}></Route>
            <Route path="/customers" component={ListCustomerComponent}></Route>
            <Route
              path="/add-broker/:id"
              component={CreateBrokerComponent}
            ></Route>
            <Route
              path="/view-broker/:id"
              component={ViewBrokerComponent}
            ></Route>
            <Route
              path="/update-broker/:id"
              component={UpdateBrokerComponent}
            ></Route>
            <Route
              path="/add-property/:id"
              component={CreatePropertyComponent}
            ></Route>
            <Route
              path="/view-property/:id"
              component={ViewPropertyComponent}
            ></Route>
            <Route
              path="/update-property/:id"
              component={UpdatePropertyComponent}
            ></Route>
            <Route
              path="/search-property"
              component={SearchPropertyComponent}
            ></Route>
            <Route
              path="/add-customer/:id"
              component={CreateCustomerComponent}
            ></Route>
            <Route
              path="/view-customer/:id"
              component={ViewCustomerComponent}
            ></Route>
            <Route
              path="/update-customer/:id"
              component={UpdateCustomerComponent}
            ></Route>
            <Route
              path="/view-booking"
              component={ListBookingComponent}
            ></Route>
            <Route
              path="/add-booking"
              component={CreateBookingComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
