import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './js/refs';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

let page = 1;
let query = '';

export const onFormSubmit = async event => {
  try {
    event.preventDefault();
    const query = event.target.elements['search-text'].value.trim();
    if (!query) {
      return;
    }
    clearGallery();
    showLoader();
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(data.hits);
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

hideLoader();
refs.form.addEventListener('submit', onFormSubmit);
