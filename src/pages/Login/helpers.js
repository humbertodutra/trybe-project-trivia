async function customFetch(URL, ENDPOINT) {
  return fetch(URL + ENDPOINT)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log('Error: ', error));
}

export default function fetchToken() {
  const URL = 'https://opentdb.com';
  const ENDPOINT = '/api_token.php?command=request';
  return customFetch(URL, ENDPOINT);
}
