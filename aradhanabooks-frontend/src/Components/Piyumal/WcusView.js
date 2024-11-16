import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./WcusView.css";

function WcusView() {
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2001/wcustomer/getAll")
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the customer requests!",
          error
        );
      });
  }, []);

  // Handle search by name or phone number
  const filteredRequests = requests.filter(
    (request) =>
      request.customername.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.customerphone.includes(searchQuery)
  );

  const handleView = (id) => {
    navigate(`/wcusview/${id}`); // Navigate to detailed view with customer ID
  };

  return (
    <div className="piyumal_wcAllDetails">
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search by Name or Phone Number"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
        className="piyumal_search_input"
      />

      <table id="table-to-pdf" className="piyumal__table_wcdetails">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>Address</th>
            <th>District</th> {/* New column for district */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.customername}</td>
              <td>{request.customeremail}</td>
              <td>{request.customerphone}</td>
              <td>{request.companyName}</td>
              <td>{request.customeraddress}</td>
              <td>{request.district}</td> {/* Display district */}
              <td>
                <button
                  onClick={() => handleView(request._id)}
                  className="piyumal__button-view"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WcusView;
