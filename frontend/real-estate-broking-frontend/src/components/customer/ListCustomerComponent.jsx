import React, { Component } from "react";
import CustomerService from "../../services/CustomerService";

class ListCustomerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
    this.addCustomer = this.addCustomer.bind(this);
    this.editCustomer = this.editCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  deleteCustomer(id) {
    CustomerService.deleteCustomer(id).then((res) => {
      this.setState({
        customers: this.state.customers.filter(
          (customer) => customer.customerId !== id
        ),
      });
    });
  }
  viewCustomer(id) {
    this.props.history.push(`/view-customer/${id}`);
  }
  editCustomer(id) {
    this.props.history.push(`/add-customer/${id}`);
  }

  componentDidMount() {
    CustomerService.getCustomer().then((res) => {
      this.setState({ customers: res.data });
    });
  }

  addCustomer() {
    this.props.history.push("/add-customer/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Customers List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addCustomer}>
            {" "}
            Add Customer
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Email</th>
                <th> Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((customer) => (
                <tr key={customer.customerId}>
                  <td> {customer.customerId} </td>
                  <td> {customer.firstName} </td>
                  <td> {customer.lastName}</td>
                  <td> {customer.email}</td>
                  <td> {customer.mobileNumber} </td>
                  <td>
                    <button
                      onClick={() => this.editCustomer(customer.customerId)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteCustomer(customer.customerId)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewCustomer(customer.customerId)}
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

export default ListCustomerComponent;
