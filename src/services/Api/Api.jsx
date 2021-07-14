import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '21723163-ca21d56557a4a0bebd6e19c52';

function fetchImages ({searchQuery, page}) {
  try {
    return axios
    .get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
  } catch {
    console.log('error')
  }
}

const Api = {
  fetchImages
}

export default Api;