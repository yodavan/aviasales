import { filterArray, getFilterTransfer } from './filter.js';

const CARRIER = {
  'FV': '../image/logo-avia/fv.png',
  'MH': '../image/logo-avia/mh.png',
  'SU': '../image/logo-avia/su.png',
  'EY': '../image/logo-avia/ey.png',
  'S7': '../image/logo-avia/s7.png',
  'TG': '../image/logo-avia/tg.png',
  'EK': '../image/logo-avia/ek.png',
};

const TRANSFER = {
  '0': 'Без пересадок',
  '1': '1 пересадка',
  '2': '2 пересадки',
  '3': '3 пересадки',
};

const NUMBER_OF_ELEMENTS = 5;

//Переводит минуты в формат. Пример: 10ч 15м
const getTimeFromMins = ( mins ) => {
  const hours = Math.trunc( mins / 60 );
  const minutes = mins % 60;
  return `${ hours }ч ${ minutes }м`;
};

//Получает время из формата iso
const getTime = ( data ) => {
  return new Date( data ).toLocaleTimeString([], {timeStyle: 'short'});
};

// Получаем новую дату
const getNewDate = ( date, minut ) => {
  const t = new Date( date )
  t.setMinutes(t.getMinutes() + minut);
  return getTime(t)
};

//Создаем и отрисовываем дату и время полета для карточки
const createDestination = ( itemSeg ) => {
  const informationItem = document.querySelectorAll('.information-list__item');
  const card = document.querySelector('#card-avia').content.querySelector('.direction');
  const directionCard = card.cloneNode(true);
  directionCard.querySelector('.route-title').textContent = `${itemSeg.origin} - ${itemSeg.destination}`;
  directionCard.querySelector('.route-subtitle').textContent = `${getTime( itemSeg.date )} - ${getNewDate( itemSeg.date, itemSeg.duration )}`;

  directionCard.querySelector('.length-subtitle').textContent = getTimeFromMins( itemSeg.duration );

  directionCard.querySelector('.stops-title').textContent = TRANSFER[itemSeg.stops.length];
  directionCard.querySelector('.stops-subtitle').textContent = itemSeg.stops.join(', ');

  informationItem.forEach((itemInform) => {
    itemInform.append(directionCard);
  });
};

//Очистка карточки
const clear = () => {
  document.querySelector('.information-list').innerHTML = '';
};

//Создаем и отрисовываем полетную каточку
const createAviaSegments = ( array ) => {
  clear();
  filterArray ( array )
  .filter(( item ) => getFilterTransfer( item ))
  .slice(0, NUMBER_OF_ELEMENTS)
  .forEach(( item ) => {
    const informationList = document.querySelector('.information-list');
    const templateCard = document.querySelector('#card').content.querySelector('.information-list__item');
    const aviaCard = templateCard.cloneNode(true);

    aviaCard.querySelector('.information-list__price').textContent = `${item.price.toLocaleString("ru-RU")} P`;
    aviaCard.querySelector('.information-list__image').src = CARRIER[item.carrier];

    informationList.appendChild(aviaCard);

    item.segments.forEach((itemSeg) => createDestination(itemSeg));
  });
};

export { createAviaSegments };
