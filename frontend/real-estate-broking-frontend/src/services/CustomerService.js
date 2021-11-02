import axios from "axios";

const CUSTOMER_REST_API_URL = "http://localhost:8080/api/v1/customers";

class CustomerService {
  getCustomer() {
    return axios.get(CUSTOMER_REST_API_URL);
  }

  updateCustomer(customer, customerId) {
    return axios.put(CUSTOMER_REST_API_URL + "/" + customerId, customer);
  }

  deleteCustomer(customerId) {
    return axios.delete(CUSTOMER_REST_API_URL + "/" + customerId);
  }

  getCustomerById(customerId) {
    return axios.get(CUSTOMER_REST_API_URL + "/" + customerId);
  }

  createCustomer(customer) {
    return axios.post(CUSTOMER_REST_API_URL, customer);
  }

  bookPropertyById(customerId, propertyId) {
    return axios.post(
      CUSTOMER_REST_API_URL + "/" + customerId + "/properties/" + propertyId
    );
  }
}
export default new CustomerService();
