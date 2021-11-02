import React, { Component } from "react";
import BookService from "../../services/BookService";

class ListBookingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookings: [],
    };
    this.deleteBooking = this.deleteBooking.bind(this);
    this.addBooking = this.addBooking.bind(this);
  }

  deleteBooking(id) {
    BookService.deleteBooking(id).then((res) => {
      this.setState({
        bookings: this.state.bookings.filter(
          (booking) => booking.bookId !== id
        ),
      });
    });
    this.props.history.push(`/view-booking`);
  }

  componentDidMount() {
    BookService.getBookings().then((res) => {
      this.setState({ bookings: res.data });
    });
  }

  addBooking() {
    this.props.history.push("/add-booking");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Booking List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addBooking}>
            {" "}
            Add Booking
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Booking ID</th>
                <th> Customer Name</th>
                <th> Property</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bookings.map((booking) => (
                <tr key={booking.bookId}>
                  <td> {booking.bookId} </td>
                  <td>
                    {" "}
                    {booking.customer.firstName +
                      " " +
                      booking.customer.lastName}
                  </td>
                  <td>
                    {" "}
                    {booking.property.propertyType +
                      " " +
                      booking.property.address +
                      " " +
                      booking.property.city}
                  </td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteBooking(booking.bookId)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
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

export default ListBookingComponent;
