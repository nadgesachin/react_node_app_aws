import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);

  const handleButtonClick = async () => {
    try {
      // Make a GET request to your server
      const response = await axios.get('http://localhost:3002/');

      // Set the response data in the component state
      setResponseData(response.data);

      // Handle the data as needed
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Make GET Request</button>

      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
