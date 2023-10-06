const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(API_URL);
  const data = response.json();

  return data;
};

export default getCurrencies;
