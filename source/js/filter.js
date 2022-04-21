const formList = document.querySelector('.form__list');
const formInput = formList.querySelectorAll('.form__input');
const buttonAllFilters = formList.querySelector('#all_filters');

buttonAllFilters .addEventListener('change', () => {
  if ( buttonAllFilters .checked ) {
    return formInput.forEach(( item ) => {
      item.checked = true;
    })
  } else {
    formInput.forEach(( item ) => {
      item.checked = false;
    })
  }
})

formList.addEventListener('change', ( evt ) => {
  if ( evt.target.id !== 'all_filters' ) {
    buttonAllFilters.checked = false;
  }
})

const buttonCheap = document.querySelector('#cheap');
const buttonFast = document.querySelector('#fast');

//Сортировка массива по стоимости
const getCheapPrice = ( array ) => {
  const copyArray = array.slice();
  return copyArray.sort((a, b) => a.price - b.price);
};

//Сортировка массива по скорости полета
const getFastFlight = ( array ) => {
  const copyArray = array.slice();
  return copyArray
  .filter((item) => {
    let sum = 0;
    item.segments.forEach(( e ) => {
      sum += e.duration;
    })
    return item.duration = sum;
  })
  .sort(( a, b ) => a.duration - b.duration );
};

const filterArray = ( array ) => {
  if ( buttonCheap.checked ) {
    return getCheapPrice( array )
  }

  if ( buttonFast.checked ) {
    return getFastFlight( array );
  }

  return array
}

//Фильрация по количеству пересадок
const withoutTransfers = document.querySelector('#without_transfers');
const oneTransfer = document.querySelector('#one_transfer');
const twoTransfer = document.querySelector('#two_transfer');
const threeTransfer = document.querySelector('#three_transfer');

//Проверка массива на соответствие условию
const getChecked = ( item, number ) => {
  return item.segments.every( ( e ) => e.stops.length <= number );
};

const getFilterTransfer = ( item ) => {
  if ( withoutTransfers.checked ) {
    if ( getChecked( item, 0 ) ) {
      return item;
    };
  }

  if ( oneTransfer.checked ) {
    if ( getChecked( item, 1 ) ) {
      return item;
    };
  }

  if ( twoTransfer.checked ) {
    if ( getChecked( item, 2 ) ) {
      return item;
    };
  }

  if ( threeTransfer.checked ) {
    if ( getChecked( item, 3 ) ) {
      return item;
    };
  }
};

export { filterArray, formList, getFilterTransfer };

