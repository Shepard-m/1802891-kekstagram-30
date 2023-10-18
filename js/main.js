/*
 * функция для создания рандомного числа
 * @param {numbers|numbers} — минимальное значение массива и максимальное значение массива
 * @return {array} — возвращает рандомный число
*/
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
/*
 * функция для возвращение рандомного значения из массива
 * @param {array} — массив с данными
 * @return {array} — возвращает рандомный элемент из массива
*/
const getRandomElementFromArray = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const NAMES = [
  'Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон',
];

const DESCRIPTION_PHOTO = [
  'Без фильтров',
  'Зацените фотку',
  'Сделал новую фотографию',
];

const MESSAGE = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
];
/*
 * функция для создания комментариев под фотографией
 * @param {number} — количество комментариев
 * @return {array} — возвращает массив комментариев
*/
const createCommentsFromPhotos = (quantityPhotos) => {
  const commentsData = [];
  for (let i = 0; i < quantityPhotos; i++){
    commentsData.push({
      id: i,
      avatar: 'img/avatar-${getRandomInteger(1,6)}.svg',
      message: getRandomElementFromArray(MESSAGE),
      name: getRandomElementFromArray(NAMES),
    });
  }
  return commentsData;
};
/*
 * функция для создания рандомной фотографии с рандомным комментарием
 * @param {numbers|numbers} — кол-во фотографий и кол-во комментариев
 * @return {array} — возвращает массив фотографий
*/
const createPhotos = (numberOfPotos, numberComments) => {
  const photos = [];
  for (let i = 1; i <= numberOfPotos; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description:  getRandomElementFromArray(DESCRIPTION_PHOTO),
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: createCommentsFromPhotos(numberComments),
    });
  }
  return photos;
};

const photoData = createPhotos;

