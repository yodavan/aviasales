import { createAviaSegments } from './creates-cards.js';
import { tickets } from './data.js';
import { formList } from './filter.js';

createAviaSegments( tickets );

const productButton = document.querySelector('.products__button-list');

productButton.addEventListener('change', () => {
  createAviaSegments( tickets );
});

formList.addEventListener('change', () => {
  createAviaSegments( tickets );
});
