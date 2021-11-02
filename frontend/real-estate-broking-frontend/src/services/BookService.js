import axios from "axios";

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1/bookings";

class BookService {
  getBookings() {
    return axios.get(BOOK_API_BASE_URL);
  }

  deleteBooking(bookId) {
    return axios.delete(BOOK_API_BASE_URL + "/" + bookId);
  }
}

export default new BookService();
