import {getRandomInt, generateArrayOfUniqUrl} from './util.js';

const countOfPosts = 25;
const countOfAvatar = 6;
const possibleNumberOfComments = 30;
const minCountOfLikes = 15;
const maxCountOfLikes = 200;

const variationsOfComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const variationsOfDiscriptions = [
  'Время не просто, оно просто время.',
  'Одна ошибка и ты ошибся.',
  'Запомни это, иначе забудешь.',
  'У самурая нет цели, есть только путь.',
  'Громко - это гораздо громче, чем тихо.'];

const variationsOfNames = ['Ариана', 'София', 'Иван', 'Вероника', 'Алия', 'Тимофей', 'Александра', 'Дмитрий'];

const arrayOfUniqUrl = generateArrayOfUniqUrl();

const generateComments = (count) => {
  const arrayOfComments = [];

  for(let commentId = 1; commentId <= count; commentId++){
    const avatar = `img/avatar-${getRandomInt(1,countOfAvatar)}.svg`;
    const comment = {
      id: commentId,
      avatar: avatar,
      message: variationsOfComments[getRandomInt(0, variationsOfComments.length - 1)],
      name: variationsOfNames[getRandomInt(0, variationsOfNames.length - 1)],
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
      discription: variationsOfDiscriptions[getRandomInt(0, variationsOfDiscriptions.length - 1)],
      likes: getRandomInt(minCountOfLikes, maxCountOfLikes),
      comments: generateComments(getRandomInt(0, possibleNumberOfComments)),
    };

    arrayOfUniqUrl.splice(localUrl, 1);
    arrayOfPosts.push(post);
  }

  return arrayOfPosts;
};

const listOfPosts = createPosts(countOfPosts);

export {listOfPosts};
