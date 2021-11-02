import React, { Component } from "react";
import CustomerService from "../../services/CustomerService";

class CreateBookingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      propertyId: 0,
      customerId: 0,
    };
    this.changePropertyIdHandler = this.changePropertyIdHandler.bind(this);
    this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
  }

  saveOrUpdateBooking = (e) => {
    e.preventDefault();
    let booking = {
      propertyId: this.state.propertyId,
      customerId: this.state.customerId,
    };
    console.log("booking => " + JSON.stringify(booking));

    CustomerService.bookPropertyById(
      this.state.customerId,
      this.state.propertyId
    ).then((res) => {
      this.props.history.push("/view-booking");
    });
  };
  changePropertyIdHandler = (event) => {
    this.setState({ propertyId: event.target.value });
  };
  changeCustomerIdHandler = (event) => {
    this.setState({ customerId: event.target.value });
  };

  cancel() {
    this.props.history.push("/view-booking");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              Add Booking
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Property Id: </label>
                    <input
                      placeholder="property id"
                      name="propertyId"
                      className="form-control"
                      value={this.state.propertyId}
                      onChange={this.changePropertyIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Customer Id: </label>
                    <input
                      placeholder="customer id"
                      name="customerId"
                      className="form-control"
                      value={this.state.customerId}
                      onChange={this.changeCustomerIdHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateBooking}
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

export default CreateBookingComponent;
