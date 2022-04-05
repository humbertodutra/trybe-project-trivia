async function customFetch(URL, ENDPOINT) {
  return fetch(URL + ENDPOINT)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log('Error: ', error);
    });
}

export function fetchToken() {
  const URL = 'https://opentdb.com';
  const ENDPOINT = '/api_token.php?command=request';
  return customFetch(URL, ENDPOINT);
}

export async function fetchQuestion(token) {
  const URL = 'https://opentdb.com';
  const ENDPOINT = `/api.php?amount=5&token=${token}`;
  const data = customFetch(URL, ENDPOINT);
  return data;
}
