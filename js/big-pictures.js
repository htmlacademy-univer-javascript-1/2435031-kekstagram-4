// fullscreenView.js
import { toggleBodyScroll } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const imgElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
const closeBtnElement = bigPictureElement.querySelector('.big-picture__cancel');
const loadMoreCommentsBtn = bigPictureElement.querySelector('.comments-loader');

let displayedComments = 5;
let currentPost = null;

const closeFullScreenView = () => {
  // Скрываем полноразмерное изображение
  bigPictureElement.classList.add('hidden');

  // Разрешаем скролл body
  toggleBodyScroll();
};

const renderComments = () => {
  if (!currentPost) {
    return;
  }

  // Вставляем новые комментарии
  const comments = currentPost.comments;
  const commentsChunkSize = 5;
  const remainingComments = comments.slice(displayedComments, displayedComments + commentsChunkSize);

  remainingComments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarElement = document.createElement('img');
    avatarElement.classList.add('social__picture');
    avatarElement.src = comment.avatar;
    avatarElement.alt = comment.name;
    avatarElement.width = 35;
    avatarElement.height = 35;

    const textElement = document.createElement('p');
    textElement.classList.add('social__text');
    textElement.textContent = `${comment.name}: ${comment.message}`;

    commentElement.appendChild(avatarElement);
    commentElement.appendChild(textElement);

    socialCommentsElement.appendChild(commentElement);
  });

  // Обновляем число показанных комментариев
  displayedComments += commentsChunkSize;
  commentsCountElement.textContent = displayedComments;

  // Если все комментарии показаны, скрываем кнопку "Загрузить ещё"
  if (displayedComments >= comments.length) {
    loadMoreCommentsBtn.classList.add('hidden');
    loadMoreCommentsBtn.removeEventListener('click', renderComments);
  }
};

const openFullScreenView = (post) => {
  currentPost = post;
  displayedComments = 5;
  imgElement.src = post.url;
  imgElement.alt = post.discription;
  likesCountElement.textContent = post.likes;
  commentsCountElement.textContent = post.comments.length;

  // Вставляем описание фотографии
  socialCaptionElement.textContent = post.discription;

  // Очищаем предыдущие комментарии
  socialCommentsElement.innerHTML = '';

  // Вставляем первые комментарии
  renderComments();

  // Показываем полноразмерное изображение
  bigPictureElement.classList.remove('hidden');

  // Запрещаем скролл body
  toggleBodyScroll();

  // Закрываем окно при клике на кнопку закрытия
  closeBtnElement.addEventListener('click', closeFullScreenView);

  // Добавляем обработчик для кнопки "Загрузить ещё"
  loadMoreCommentsBtn.addEventListener('click', renderComments);

  // Добавляем обработчик для клавиши ESC
  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeFullScreenView();
    }
  };

  document.addEventListener('keydown', onDocumentKeydown);
};

export { openFullScreenView, closeFullScreenView };
