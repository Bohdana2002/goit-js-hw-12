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
    hideLoadMoreButton();
    showLoader();
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
    const totalPages = Math.ceil(data.totalHits / 15);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }
    showLoadMoreButton();
  } catch (error) {
    console.log(error);
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong! Please try again.',
    });
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
    } else {
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong! Please try again.',
    });
  } finally {
    hideLoader();
  }
};
hideLoader();
refs.form.addEventListener('submit', onFormSubmit);
