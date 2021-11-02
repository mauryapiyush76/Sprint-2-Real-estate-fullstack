import React, { Component } from "react";
import PropertyService from "../../services/PropertyService";

class ViewPropertyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      property: {},
    };
  }

  componentDidMount() {
    PropertyService.getPropertyById(this.state.id).then((res) => {
      this.setState({ property: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Property Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Address: </label>
              <div> {this.state.property.address}</div>
            </div>
            <div className="row">
              <label> Property Type: </label>
              <div> {this.state.property.propertyType}</div>
            </div>
            <div className="row">
              <label> Floor Space: </label>
              <div> {this.state.property.floorSpace}</div>
            </div>
            <div className="row">
              <label> City: </label>
              <div> {this.state.property.city}</div>
            </div>
            <div className="row">
              <label> Offer Type: </label>
              <div> {this.state.property.offerType}</div>
            </div>
            <div className="row">
              <label> Price: </label>
              <div> {this.state.property.price}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPropertyComponent;
