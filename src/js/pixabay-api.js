import axios from 'axios';
import { clearGallery, hideLoader, showLoader } from './render-functions';

export function getImagesByQuery(query) {
  return axios
    .get(
      `https://pixabay.com/api/?key=55620354-ac6ed1e79a2ffd89ad6e48679&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => response.data);
}
