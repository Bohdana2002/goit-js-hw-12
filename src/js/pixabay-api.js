import axios from 'axios';
import { clearGallery, hideLoader, showLoader } from './render-functions';
import { refs } from './refs';

const API = '55620354-ac6ed1e79a2ffd89ad6e48679';
const URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query, page) => {
  const params = {
    key: API,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page,
  };
  const { data } = await axios.get(URL, { params });
  return data;
};
