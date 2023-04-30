const BASE_URL = 'https://api.harvardartmuseums.org';
const KEY = 'apikey=abcde'; // USE YOUR KEY HERE

function fetchObjects() {
    const url = `${ BASE_URL }/object?${ KEY }`;

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}

fetchObjects();

async function fetchObjects() {
    const url = `${ BASE_URL }/object?${ KEY }`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchObjects() {
    const url = `${ BASE_URL }/object?${ KEY }`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchObjects().then(x => console.log(x)); // { info: {}, records: [{}, {},]}