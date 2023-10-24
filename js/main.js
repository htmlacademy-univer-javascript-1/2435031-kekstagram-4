/* eslint-disable camelcase */
const count_of_posts = 25;
const count_of_avatar = 6;
const possible_number_of_comments = 30;
const min_count_of_likes = 15;
const max_count_of_likes = 200;

const variations_of_comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const variations_of_discriptions = [
  'Время не просто, оно просто время.',
  'Одна ошибка и ты ошибся.',
  'Запомни это, иначе забудешь.',
  'У самурая нет цели, есть только путь.',
  'Громко - это гораздо громче, чем тихо.'];

const variations_of_names = ['Ариана', 'София', 'Иван', 'Вероника', 'Алия', 'Тимофей', 'Александра', 'Дмитрий'];

const get_random_int = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

const generate_array_of_uniq_url = () => Array.from({ length: 25 }, (_, index) => index + 1);
const array_of_uniq_url = generate_array_of_uniq_url();

const generate_comments = (count) => {
  const array_of_comments = [];

  for(let comment_id = 1; comment_id <= count; comment_id++){
    const avatar = `img/avatar-${get_random_int(1,count_of_avatar)}.svg`;
    const comment = {
      id: comment_id,
      avatar: avatar,
      message: variations_of_comments[get_random_int(0, variations_of_comments.length - 1)],
      name: variations_of_names[get_random_int(0, variations_of_names.length - 1)],
    };

    array_of_comments.push(comment);
  }

  return array_of_comments;
};

const create_posts = (count) => {
  const array_of_posts = [];

  for(let user_id = 1; user_id <= count; user_id++){
    const local_url = get_random_int(0, array_of_uniq_url.length - 1);
    const post = {
      id: user_id,
      url: `photos/${array_of_uniq_url[local_url]}.jpg`,
      discription: variations_of_discriptions[get_random_int(0, variations_of_discriptions.length - 1)],
      likes: get_random_int(min_count_of_likes, max_count_of_likes),
      comments: generate_comments(get_random_int(0, possible_number_of_comments)),
    };

    array_of_uniq_url.splice(local_url, 1);
    array_of_posts.push(post);
  }

  return array_of_posts;
};

// eslint-disable-next-line no-unused-vars
const list_of_posts = create_posts(count_of_posts);
