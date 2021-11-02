import React, { Component } from "react";
import PropertyService from "../../services/PropertyService";

class SearchPropertyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
      searchQuery: "",
    };
    this.changeQueryHandler = this.changeQueryHandler.bind(this);
    this.searchProperty = this.searchProperty.bind(this);
  }

  changeQueryHandler = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  searchProperty = (e) => {
    e.preventDefault();
    PropertyService.searchProperty(this.state.searchQuery).then((res) => {
      this.setState({
        properties: res.data,
      });
    });
  };

  componentDidMount() {
    PropertyService.getProperties().then((res) => {
      this.setState({ properties: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Search Property</h2>
        <div className="row">
          <form className="form-inline mr-auto">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchQuery}
              onChange={this.changeQueryHandler}
            />
            <button
              className="btn blue-gradient btn-rounded btn-sm my-0"
              type="submit"
              onClick={this.searchProperty}
            >
              Search
            </button>
          </form>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Address</th>
                <th> Property Type</th>
                <th> Floor Space</th>
                <th> City</th>
                <th> Offer Type</th>
                <th> Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.properties.map((property) => (
                <tr key={property.propertyId}>
                  <td> {property.address} </td>
                  <td> {property.propertyType}</td>
                  <td> {property.floorSpace}</td>
                  <td> {property.city} </td>
                  <td> {property.offerType}</td>
                  <td> {property.price}</td>
                  {/* 
                <td>
                    <button
                      onClick={() => this.editProperty(property.propertyId)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteProperty(property.propertyId)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewProperty(property.propertyId)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
              */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SearchPropertyComponent;
