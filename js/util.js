const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

const generateArrayOfUniqUrl = () => Array.from({ length: 25 }, (_, index) => index + 1);

export {getRandomInt, generateArrayOfUniqUrl};
