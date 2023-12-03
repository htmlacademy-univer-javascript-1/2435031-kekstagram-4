// sketchThumbnails.js
import { listOfPosts } from './data.js';

const createThumbnailElement = (post) => {
  const template = document.querySelector('#picture').content.cloneNode(true);
  const pictureElement = template.querySelector('.picture');

  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__img').alt = post.discription;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;

  return pictureElement;
};

const renderThumbnails = (listOfPostsThumbnails) => {
  const fragment = document.createDocumentFragment();
  const picturesContainer = document.querySelector('.pictures');

  listOfPostsThumbnails.forEach((post) => {
    const thumbnailElement = createThumbnailElement(post);
    fragment.appendChild(thumbnailElement);
  });

  picturesContainer.appendChild(fragment);
};

// Используем listOfPosts
renderThumbnails(listOfPosts);

export { renderThumbnails };
