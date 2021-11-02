import axios from 'axios';

const BROKER_REST_API_URL = "http://localhost:8080/api/v1/brokers";

class BrokerService{

    getBroker(){
        return axios.get(BROKER_REST_API_URL);
    }

    updateBroker(broker, brokerId){
        return axios.put(BROKER_REST_API_URL + '/' + brokerId , broker);
    }

    deleteBroker(brokerId){
        return axios.delete(BROKER_REST_API_URL + '/' + brokerId);
    }

    getBrokerById(brokerId){
        return axios.get(BROKER_REST_API_URL + '/' + brokerId);
    }

    createBroker(broker){
        return axios.post(BROKER_REST_API_URL, broker);
    }

}
export default new BrokerService();