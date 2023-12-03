import './util.js';
// eslint-disable-next-line no-unused-vars
import {listOfPosts} from './data.js';
import { renderThumbnails } from './sketchThumbnails.js';

document.addEventListener('DOMContentLoaded', () => {
  renderThumbnails(listOfPosts);
});
