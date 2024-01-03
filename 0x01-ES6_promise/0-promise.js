// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform some asynchronous operation, like fetching data from an API
    // For example, making a fetch request
    fetch('https://api.example.com/data')
      .then(response => {
        // Check for valid HTTP response (could be 404, 500, etc.)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Resolve the Promise with the fetched data
        resolve(data);
      })
      .catch(error => {
        // Reject the Promise if there's an error
        reject(error);
      });
  });
}

export default getResponseFromAPI;
