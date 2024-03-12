import React from "react";
import axios from "axios";

//this is used to serach the flights and is also used later to craete a connection 
//between the flights and the reserves
function SearchForm({ onSearch }) {
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("/api/flights");
      onSearch(response.data);
    } catch (error) {
      console.error("Failed to search for flights:", error);
    }
  };

  return <form onSubmit={handleSearchSubmit}></form>;
}

export default SearchForm;
