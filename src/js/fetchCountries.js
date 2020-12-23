import errorNotification from './errorNotification';

function fetchCountries(country) {
  const BASE_URL = 'https://restcountries.eu/rest/v2/';
  return fetch(`${BASE_URL}name/${country}`)
    .then(response => response.json())
    .catch(error => {
      errorNotification('Check input data');
      return error;
    });
}

export default fetchCountries;
