import React, { Component } from "react";
import PropertyService from "../../services/PropertyService";

class UpdatePropertyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      address: "",
      propertyType: "shop",
      floorSpace: 0.0,
      city: "",
      offerType: "sell",
      price: 0,
    };
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changePropertyTypeHandler = this.changePropertyTypeHandler.bind(this);
    this.changeFloorSpaceHandler = this.changeFloorSpaceHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeOfferTypeHandler = this.changeOfferTypeHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
  }

  componentDidMount() {
    PropertyService.getPropertyById(this.state.id).then((res) => {
      let property = res.data;
      this.setState({
        address: property.address,
        propertyType: property.propertyType,
        floorSpace: property.floorSpace,
        city: property.city,
        offerType: property.offerType,
        price: property.price,
      });
    });
  }

  updateProperty = (e) => {
    e.preventDefault();
    let property = {
      address: this.state.address,
      propertyType: this.state.propertyType,
      floorSpace: this.state.floorSpace,
      city: this.state.city,
      offerType: this.state.offerType,
      price: this.state.price,
    };
    console.log("property => " + JSON.stringify(property));
    console.log("id => " + JSON.stringify(this.state.id));
    PropertyService.updateProperty(property, this.state.id).then((res) => {
      this.props.history.push("/properties");
    });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changePropertyTypeHandler = (event) => {
    this.setState({ propertyType: event.target.value });
  };
  changeFloorSpaceHandler = (event) => {
    this.setState({ floorSpace: event.target.value });
  };
  changeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };
  changeOfferTypeHandler = (event) => {
    this.setState({ offerType: event.target.value });
  };
  changePriceHandler = (event) => {
    this.setState({ price: event.target.value });
  };

  cancel() {
    this.props.history.push("/properties");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Property Type: </label>
                    <select
                      value={this.state.propertyType}
                      onChange={this.changePropertyTypeHandler}
                    >
                      <option value="shop">Shop</option>
                      <option value="flat">Flat</option>
                      <option value="plot">Plot</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Floor Space: </label>
                    <input
                      placeholder="0.0"
                      name="floorSpace"
                      className="form-control"
                      value={this.state.floorSpace}
                      onChange={this.changeFloorSpaceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> City: </label>
                    <input
                      placeholder="city"
                      name="city"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.changeCityHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Offer Type: </label>
                    <select
                      value={this.state.offerType}
                      onChange={this.changeOfferTypeHandler}
                    >
                      <option value="sell">Sell</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Price: </label>
                    <input
                      placeholder="0"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.changePriceHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateProperty}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePropertyComponent;
