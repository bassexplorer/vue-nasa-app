import axios from 'axios';

// const dateString ='2020-10-10'
// const dateParam = `&date=${dateString}`;

const apiKey = "VJZC10H6jtWSItPGdlFTiqQFAmBd6bcOgDYeF6ES";

export default axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod`,
  params: {
    api_key: apiKey
  },
  responseType: 'json',
})