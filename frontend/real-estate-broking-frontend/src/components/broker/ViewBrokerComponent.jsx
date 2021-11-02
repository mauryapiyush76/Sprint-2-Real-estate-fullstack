import React from 'react'
import BrokerService from '../../services/BrokerService'


class ViewBrokerComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: this.props.match.params.id,
        broker: {},
      };
    }

    componentDidMount() {
        BrokerService.getBrokerById(this.state.id).then((res) => {
          this.setState({ broker: res.data });
        });
      }

      render() {
        return (
          <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center"> View Broker Details</h3>
              <div className="card-body">
                <div className="row">
                  <label> First Name: </label>
                  <div> {this.state.broker.firstName}</div>
                </div>
                <div className="row">
                  <label> Last Name: </label>
                  <div> {this.state.broker.lastName}</div>
                </div>
                <div className="row">
                  <label> Email: </label>
                  <div> {this.state.broker.email}</div>
                </div>
                <div className="row">
                  <label> Mobile Number: </label>
                  <div> {this.state.broker}</div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

export default ViewBrokerComponent;