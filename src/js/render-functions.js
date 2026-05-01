import { getImagesByQuery } from './pixabay-api';
import { refs } from './refs';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => ` <li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${webformatURL}"
		  alt="${tags}"
		/>
	</a>
  <div class="field">
  <div class="statistics">
    <span class='titles'>Likes</span>
    <span class='numbers'>${likes}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Views</span>
    <span class='numbers'>${views}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Comments</span>
    <span class='numbers'>${comments}</span>
  </div>
  <div class="statistics">
    <span class='titles'>Downloads</span>
    <span class='numbers'>${downloads}</span>
  </div>
</div>
</li>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}
export function clearGallery() {
  refs.gallery.innerHTML = '';
}
export function showLoader() {
  refs.preloader.classList.add('is-active');
}
export function hideLoader() {
  refs.preloader.classList.remove('is-active');
}
