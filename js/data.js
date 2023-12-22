import {getRandomInt, generateArrayOfUniqUrl} from './util.js';

const COUNTOFPOSTS = 25;
const COUNTOFAVATAR = 6;
const POSSIBLENUMBEROFCOMMENTS = 30;
const MINCOUNTOFLIKES = 15;
const MAXCOUNTOFLIKES = 200;

const VARIATIONSOFCOMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const VARIATIONSOFDISCRIPTIONS = [
  'Время не просто, оно просто время.',
  'Одна ошибка и ты ошибся.',
  'Запомни это, иначе забудешь.',
  'У самурая нет цели, есть только путь.',
  'Громко - это гораздо громче, чем тихо.'];

const VARIATIONSOFNAMES = ['Ариана', 'София', 'Иван', 'Вероника', 'Алия', 'Тимофей', 'Александра', 'Дмитрий'];

const arrayOfUniqUrl = generateArrayOfUniqUrl();

const generateComments = (count) => {
  const arrayOfComments = [];

  for(let commentId = 1; commentId <= count; commentId++){
    const avatar = `img/avatar-${getRandomInt(1,COUNTOFAVATAR)}.svg`;
    const comment = {
      id: commentId,
      avatar: avatar,
      message: VARIATIONSOFCOMMENTS[getRandomInt(0, VARIATIONSOFCOMMENTS.length - 1)],
      name: VARIATIONSOFNAMES[getRandomInt(0, VARIATIONSOFNAMES.length - 1)],
    };

    arrayOfComments.push(comment);
  }

  return arrayOfComments;
};

const createPosts = (count) => {
  const arrayOfPosts = [];

  for(let userId = 1; userId <= count; userId++){
    const localUrl = getRandomInt(0, arrayOfUniqUrl.length - 1);
    const post = {
      id: userId,
      url: `photos/${arrayOfUniqUrl[localUrl]}.jpg`,
      discription: VARIATIONSOFDISCRIPTIONS[getRandomInt(0, VARIATIONSOFDISCRIPTIONS.length - 1)],
      likes: getRandomInt(MINCOUNTOFLIKES, MAXCOUNTOFLIKES),
      comments: generateComments(getRandomInt(0, POSSIBLENUMBEROFCOMMENTS)),
    };

    arrayOfUniqUrl.splice(localUrl, 1);
    arrayOfPosts.push(post);
  }

  return arrayOfPosts;
};

const listOfPosts = createPosts(COUNTOFPOSTS);

export {listOfPosts};
