import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './js/refs';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

let page = 1;
let query = '';
const onLoadMoreBtnClick = async event => {
  try {
    page++;
    showLoader();
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    const firstCard = document.querySelector('.gallery-item');
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
export const onFormSubmit = async event => {
  try {
    event.preventDefault();
    query = event.target.elements['search-text'].value.trim();
    if (!query) {
      return;
    }
    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(data.hits);
    const totalPages = Math.ceil(data.totalHits / 15);
    if (totalPages > 1) {
      showLoadMoreButton();
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};
hideLoader();
refs.form.addEventListener('submit', onFormSubmit);
