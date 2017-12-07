import axios from "axios";


export default {
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },

  loginUser: function(userData) {
    return axios.get("/api/users/login", userData);
  },

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getUsers: function() {
    return axios.get("/api/users")
  },

  getUser: function(id) {
    return axios.get('/api/users/'+id);
  },

  createItem: function(id) {
    return axios.post('api/users'+id+'/market');
  },

  getItems: function(id) {
    return axios.get('api/users'+id+'/market');
  },

  getCategory: function(category) {
    return axios.get('api/users/'+category);
  }
  
};
