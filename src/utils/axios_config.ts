import axios from 'axios';
const MAIN_URL = 'https://api.spaceflightnewsapi.net/v3/';

const instance = axios.create({
  baseURL: MAIN_URL,
});

export default instance;
