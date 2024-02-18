//your JS code here. If required.
const axios = require('axios');

async function makeHttpRequest() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error making HTTP request:', error.message);
  }
}

makeHttpRequest();
