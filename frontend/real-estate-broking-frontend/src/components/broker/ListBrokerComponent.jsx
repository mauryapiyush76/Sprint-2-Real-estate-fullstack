import React, { Component } from "react";
import BrokerService from "../../services/BrokerService";

class ListBrokerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brokers: [],
    };
    this.addBroker = this.addBroker.bind(this);
    this.editBroker = this.editBroker.bind(this);
    this.deleteBroker = this.deleteBroker.bind(this);
  }

  deleteBroker(id) {
    BrokerService.deleteBroker(id).then((res) => {
      this.setState({
        brokers: this.state.brokers.filter((broker) => broker.brokerId !== id),
      });
    });
  }
  viewBroker(id) {
    this.props.history.push(`/view-broker/${id}`);
  }
  editBroker(id) {
    this.props.history.push(`/add-broker/${id}`);
  }

  componentDidMount() {
    BrokerService.getBroker().then((res) => {
      this.setState({ brokers: res.data });
    });
  }

  addBroker() {
    this.props.history.push("/add-broker/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Brokers List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addBroker}>
            {" "}
            Add Broker
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Email</th>
                <th> Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {this.state.brokers.map((broker) => (
                <tr key={broker.brokerId}>
                  <td> {broker.firstName} </td>
                  <td> {broker.lastName}</td>
                  <td> {broker.email}</td>
                  <td> {broker.mobileNumber} </td>
                  <td>
                    <button
                      onClick={() => this.editBroker(broker.brokerId)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteBroker(broker.brokerId)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewBroker(broker.brokerId)}
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

export default ListBrokerComponent;
