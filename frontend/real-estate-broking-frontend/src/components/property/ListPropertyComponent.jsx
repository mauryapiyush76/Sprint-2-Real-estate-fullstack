import React, { Component } from "react";
import PropertyService from "../../services/PropertyService";

class ListPropertyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
    };
    this.addProperty = this.addProperty.bind(this);
    this.editProperty = this.editProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  deleteProperty(id) {
    PropertyService.deleteProperty(id).then((res) => {
      this.setState({
        properties: this.state.properties.filter(
          (property) => property.propertyId !== id
        ),
      });
    });
  }
  viewProperty(id) {
    this.props.history.push(`/view-property/${id}`);
  }
  editProperty(id) {
    this.props.history.push(`/add-property/${id}`);
  }

  componentDidMount() {
    PropertyService.getProperties().then((res) => {
      this.setState({
        properties: res.data.filter(
          (property) => property.availableStatus === true
        ),
      });
    });
  }

  addProperty() {
    this.props.history.push("/add-property/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Properties List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addProperty}>
            {" "}
            Add Property
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
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
                  <td> {property.propertyId} </td>
                  <td> {property.address} </td>
                  <td> {property.propertyType}</td>
                  <td> {property.floorSpace}</td>
                  <td> {property.city} </td>
                  <td> {property.offerType}</td>
                  <td> {property.price}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPropertyComponent;
