const breakfast = 'pusryciai';
const dinner = 'vakariene';
const lunch = 'pietus';
const dishTypes = [breakfast, dinner, lunch];
let dishesList = document.querySelector('.modal-list');
let productsListTable = document.querySelector('.products_list-tbody');
let searchDishInput = document.getElementById('myInput');
let productInput = document.getElementById('product_input');
let btn = Array.from(document.querySelectorAll('.box__weekday-buttons'));
let addNewIngridientBtn = document.querySelector('.add-ingridient-btn');
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName('modal-close__span')[0];
let modalNewDish = document.getElementById('myModal_newDish');
let spanNewDish = document.getElementsByClassName(
  'modalNewDish-close__span'
)[0];
let addNewProductBtn = document.querySelector('#new_product_btn');
let addNewProductForm = document.querySelector('#add-new-product-form');
let addNewDishSubmitBtn = document.querySelector('#new-dish-submit-btn');
let dishes = [];
let products = [];
let ingridients = [];

//PATIEKALAI/KONSTRUKTORIAI
// -konstruktoriai patiekalui ir patiekalo sudėčiai
class constructorDish {
  constructor(id, portion, name, type, ingredients) {
    this.id = id;
    this.portion = portion;
    this.dishName = name;
    this.dishType = type;
    this.dishIngredients = ingredients;
  }
}

class constructorIngredients {
  constructor(name, quantity, units) {
    this.name = name;
    this.quantity = quantity;
    this.units = units;
  }
}
//-patiekalo pavadinimo pirma raidė didžioji, kitos mažosios
let convertText = (text) => {
  return text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
};
//-patiekalu sukurimas
let createDish = () => {
  let makaronai = new constructorDish(
    1,
    2,
    convertText('makaronai su brokoliais'),
    [lunch, dinner],
    [
      new constructorIngredients('Makaronai', 400, 'g'),
      new constructorIngredients('Brokoliai', 0.5, 'vnt'),
      new constructorIngredients('Suris', 100, 'g'),
      new constructorIngredients('Grietinele', 200, 'ml'),
    ]
  );
  dishes.push(makaronai);

  let avizuKose = new constructorDish(
    2,
    2,
    convertText('avizu kose'),
    [breakfast],
    [
      new constructorIngredients('Avizos', 200, 'g'),
      new constructorIngredients('Bananai', 1, 'vnt'),
      new constructorIngredients('Riesutu sviestas', 50, 'g'),
    ]
  );
  dishes.push(avizuKose);

  let grikiuKose = new constructorDish(
    4,
    2,
    convertText('grikiu kose'),
    [breakfast],
    [
      new constructorIngredients('Grikiai', 200, 'g'),
      new constructorIngredients('Kefyras', 400, 'ml'),
    ]
  );
  dishes.push(grikiuKose);

  let lesiuSalotos = new constructorDish(
    3,
    2,
    convertText('lesiu salotos su haloumiu'),
    [lunch, dinner],
    [
      new constructorIngredients('Lesiai', 200, 'g'),
      new constructorIngredients('Pomidorai', 4, 'vnt'),
      new constructorIngredients('Haloumis', 1, 'vnt'),
      new constructorIngredients('Avokadas', 2, 'vnt'),
    ]
  );
  dishes.push(lesiuSalotos);
  console.log(dishes);

  let portabeloSuMocorela = new constructorDish(
    5,
    2,
    convertText('portabelo su mocorela/pomidorais'),
    [lunch, dinner],
    [
      new constructorIngredients('Portobelo', 4, 'vnt'),
      new constructorIngredients('Pomidorai', 2, 'vnt'),
      new constructorIngredients('Mocorela', 1, 'vnt'),
      new constructorIngredients('Dziugas', 50, 'g'),
    ]
  );
  dishes.push(portabeloSuMocorela);
  console.log(dishes);

  let batataiSuTunu = new constructorDish(
    6,
    2,
    convertText('batatai su tunu'),
    [lunch, dinner],
    [
      new constructorIngredients('Batatai', 3, 'vnt'),
      new constructorIngredients('Tunas', 2, 'vnt'),
      new constructorIngredients('Graikiskas jogurtas', 100, 'g'),
      new constructorIngredients('Morkos', 4, 'vnt'),
    ]
  );
  dishes.push(batataiSuTunu);
  console.log(dishes);

  let rikotosBlynaiSuLasisa = new constructorDish(
    7,
    2,
    convertText('rikotos blynai su lasisa'),
    [breakfast],
    [
      new constructorIngredients('Rikota', 400, 'g'),
      new constructorIngredients('Lasisa', 100, 'g'),
      new constructorIngredients('Kefyras', 100, 'ml'),
      new constructorIngredients('Kiausiniai', 4, 'vnt'),
      new constructorIngredients('Pilno grudo miltai', 200, 'g'),
    ]
  );
  dishes.push(rikotosBlynaiSuLasisa);
  console.log(dishes);

  let jogurtasSuGranola = new constructorDish(
    8,
    2,
    convertText('jogurtas su granola'),
    [breakfast],
    [
      new constructorIngredients('Jogurtas', 200, 'ml'),
      new constructorIngredients('Granola', 100, 'g'),
    ]
  );
  dishes.push(jogurtasSuGranola);
  console.log(dishes);
};

createDish();

//PRODUKTAI/KONSTRUKTORIUS
//-new product constructor

class createProduct {
  constructor(name, units, category) {
    this.name = name;
    this.units = units;
    this.category = category;
  }
}

//-new products creating (hardcoding)

let createProducts = () => {
  let liesaVarske = new createProduct(
    convertText('liesa varske'),
    'g',
    'Pieno gaminiai ir kiausiniai'
  );
  let kiausiniai = new createProduct(
    convertText('kiausiniai'),
    'vnt',
    'Pieno gaminiai ir kiausiniai'
  );
  let bananai = new createProduct(
    convertText('bananai'),
    'vnt',
    'Vaisiai ir darzoves'
  );

  let kvietiniaiMiltai = new createProduct(
    convertText('kvietiniai miltai'),
    'g',
    'Bakalėja'
  );
  products.push(liesaVarske, kiausiniai, bananai, kvietiniaiMiltai);
};

createProducts();

//MODALAI
//-close dishes modal
let closeDishesModal = () => {
  modal.style.display = 'none';
  let clickedBtn = document.querySelector('.clicked');
  clickedBtn.classList.remove('clicked');
};

//-create newDish modal
let createNewDishModal = () => {
  let newDishModalOpenBtn = document.createElement('button');
  let newDishModalBtnText = document.createTextNode('Sukurti naują patiekalą');
  let dishesListModal = document.querySelector('.modal-list-and-input');
  dishesListModal.appendChild(newDishModalOpenBtn);
  newDishModalOpenBtn.appendChild(newDishModalBtnText);
  newDishModalOpenBtn.classList.add('new_dish_btn');

  newDishModalOpenBtn.addEventListener('click', (e) => {
    let modalNewDish = document.querySelector('.modal_newDish');
    modalNewDish.style.display = 'block';
  });
};

//-checking modals activity
let checkDishesModalActive = () => {
  return (
    modal.style.display === 'block' && modalNewDish.style.display !== 'block'
  );
};

let checkNewDishModalActive = () => {
  return (
    modal.style.display === 'block' && modalNewDish.style.display === 'block'
  );
};

//UNIVERSALIOS FUNKCIJOS
//-isfiltruoto saraso gavimas naudojams search'ams

let getFilteredList = (list) => {
  let filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].style.display === 'block') {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
};

//-search in lists funkcija
let searchInList = (e, input, list, tagParent, tagChild, selectedClass) => {
  let filter = input.value.toUpperCase();
  let listItems = list.getElementsByTagName(tagParent);

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < listItems.length; i++) {
    let a = listItems[i].getElementsByTagName(tagChild)[0];
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //when Backspace is clicked first visible element should be selected
      if (e.code === 'Backspace') {
        listItems[i].style.backgroundColor = '';
        listItems[i].classList.remove(selectedClass);
      }
      listItems[i].style.display = 'block';
    } else {
      listItems[i].style.backgroundColor = '';
      listItems[i].style.display = 'none';
      listItems[i].classList.remove(selectedClass);
    }
  }

  //if no elements are selected then first element should be selected
  if (document.querySelector('.' + selectedClass) === null) {
    let liFiltered = getFilteredList(listItems);
    if (liFiltered[0] != undefined) {
      liFiltered[0].classList.add(selectedClass);
      liFiltered[0].style.backgroundColor = 'orange';
    }
  }
};

//-arrow down funkcija modalu listams

let handlingArrowDownForList = (
  e,
  selectedItem,
  filteredList,
  selectedClass
) => {
  if (e.code === 'ArrowDown') {
    if (selectedItem) {
      for (let i = 0; i < filteredList.length - 1; i++) {
        if (filteredList[i] === selectedItem) {
          selectedItem.classList.remove(selectedClass);
          selectedItem.style.backgroundColor = '';
          filteredList[i + 1].classList.add(selectedClass);
          filteredList[i + 1].style.backgroundColor = 'orange';
        }
      }
    } else {
      filteredList[0].classList.add(selectedClass);
      filteredList[0].style.backgroundColor = 'orange';
    }
  }
};

//-arrow up funkcija modalu listams

let handlingArrowUpForList = (e, selectedItem, filteredList, selectedClass) => {
  if (e.code === 'ArrowUp') {
    if (selectedItem) {
      for (let i = 1; i < filteredList.length; i++) {
        if (filteredList[i] === selectedItem) {
          selectedItem.classList.remove(selectedClass);
          selectedItem.style.backgroundColor = '';
          filteredList[i - 1].classList.add(selectedClass);
          filteredList[i - 1].style.backgroundColor = 'orange';
        }
      }
    } else {
      selectedItem = filteredList[0].classList.add(selectedClass);
      filteredList[0].style.backgroundColor = 'orange';
    }
  }
};

//PATIEKALAI
//-PATIEKALU saraso sukurimas
let createDishesList = (localDishType, button) => {
  let dishesListModal = document.querySelector('.modal-list-and-input');
  let newDishModalOpenBtn = document.querySelector('.new_dish_btn');

  if (newDishModalOpenBtn !== null) {
    dishesListModal.removeChild(newDishModalOpenBtn);
  }

  button.classList.add('clicked');
  while (dishesList.hasChildNodes()) {
    dishesList.removeChild(dishesList.firstChild);
  }

  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].dishType.indexOf(localDishType) != -1) {
      let dishToList = document.createElement('li');
      dishToList.style.display = 'block';
      let dishtoListLink = document.createElement('a');
      dishesList.appendChild(dishToList);
      dishToList.appendChild(dishtoListLink);
      let dishToListText = document.createTextNode(dishes[i].dishName);
      dishtoListLink.appendChild(dishToListText);
      dishtoListLink.addEventListener('click', (event) => {
        event.preventDefault();
        button.innerHTML = dishes[i].dishName;
        closeDishesModal();
      });
    }
  }

  searchDishInput.addEventListener('keyup', (event) => {
    searchInList(event, searchDishInput, dishesList, 'li', 'a', 'selected');
  });

  createNewDishModal();
};

//PRODUKTAI
//-PRODUKTU listo iskvietimas

let getProductsList = () => {
  let productsListTable = document.querySelector('.products_list-tbody');
  let output = ' ';
  products.forEach((product) => {
    output += `
    <tr class= "product">
      <td>${product.name}</td>
      <td>${product.units}</td>
    </tr>
    `;
  });
  productsListTable.innerHTML = output;

  selectProduct();
};

//-pasirinkus produkta pasikeicia ingridiento inputu vertes
let selectProduct = () => {
  let allProducts = document.querySelectorAll('.product');
  let unitsInput = document.querySelector('.product-units-input');
  allProducts.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      let productSelected = document.querySelector('.selected-product');
      if (productSelected != null || productSelected != undefined) {
        productSelected.classList.remove('selected-product');
        productSelected.style.backgroundColor = '';
      }
      item.classList.add('selected-product');
      item.style.backgroundColor = 'orange';

      let firstChild = item.firstElementChild.innerText;
      let lastChild = item.lastElementChild.innerText;
      productInput.value = firstChild;
      unitsInput.value = lastChild;
    });
  });
};

getProductsList();

//-naujo produkto pridejimas i sarasa

let createNewProductForm = () => {
  let createNewProductForm = document.querySelector(
    '.new_product_form_container'
  );
  let newProductFormCss = window.getComputedStyle(createNewProductForm);
  console.log(newProductFormCss.display);

  if (newProductFormCss.display === 'none') {
    createNewProductForm.style.display = 'block';
  } else {
    createNewProductForm.style.display = 'none';
  }
};

let addNewProductToList = (e) => {
  let productName = document.querySelector('#product-name');
  let productUnit = document.querySelector('#product-unit');
  let productCategory = document.querySelector('#product-category');
  let createNewProductForm = document.querySelector(
    '.new_product_form_container'
  );

  e.preventDefault();

  let newProduct = new createProduct(
    convertText(productName.value),
    productUnit.value.toLowerCase(),
    productCategory.value
  );
  products.push(newProduct);
  getProductsList(e);
  createNewProductForm.style.display = 'none';
  productName.value = '';
  productUnit.value = '';
  productCategory.value = '';

  let productsList = document.querySelector('.products_list');
  searchInList(e, productInput, productsList, 'tr', 'td', 'selected-product');
};

//ingridients list building

let addIngridientsToList = () => {
  let unitsInput = document.querySelector('.product-units-input');
  let quantityInput = document.querySelector('.product-quantity-input');
  ingridients.push(
    new constructorIngredients(
      productInput.value,
      +quantityInput.value,
      unitsInput.value
    )
  );

  productInput.value = '';
  unitsInput.value = '';
  quantityInput.value = '';
};

let showDishIngridientsList = () => {
  let ingridientsList = document.querySelector('.added-ingridients');
  let output = '';
  ingridients.forEach((ingridient) => {
    output += `
    <tr class="dish-ingridient">
      <td class="ingridient-name">${ingridient.name}</td>
      <td class="ingridient-quantity">${ingridient.quantity}</td>
      <td class="ingridient-unit">${ingridient.units}</td>
      <td><button class="delete-ingridient">&times;</button></td>
    </tr>
    `;
  });

  ingridientsList.innerHTML = output;

  //delete ingridient
  let deleteIngridientBtns = document.querySelectorAll('.delete-ingridient');

  deleteIngridientBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      deleteIngridient(index);
    });
  });
};

let checkIngridientsInputs = () => {
  let unitsInput = document.querySelector('.product-units-input');
  let quantityInput = document.querySelector('.product-quantity-input');
  let alertMessage = document.querySelector(
    '.ingridients-inputs-alert-message'
  );
  let message = '';

  if (
    productInput.value === '' ||
    unitsInput.value === '' ||
    quantityInput.value === ''
  ) {
    message += 'Prašome užpildyti visus laukus. ';
  }
  if (checkIsIngridientInProductsList() === false) {
    message += 'Prašome pasirinkti produktą iš sąrašo. ';
  }
  if (isNaN(quantityInput.value)) {
    message += 'Prašome nurodykite teisingai kiekį. ';
  }

  alertMessage.innerText = message;

  return message === '';
};

let checkIsIngridientInProductsList = () => {
  let ingridientIsInProductList = false;
  products.forEach((product) => {
    if (product.name == productInput.value) {
      ingridientIsInProductList = true;
    }
  });
  return ingridientIsInProductList;
};

let deleteIngridient = (index) => {
  ingridients.splice(index, 1);
  return showDishIngridientsList();
};

let updateDishList = () => {
  let clickedBtn = document.querySelector('.clicked');
  let clickedBtnClasses = Array.from(clickedBtn.classList);
  console.log(clickedBtnClasses);
  if (clickedBtnClasses.indexOf('breakfast-btn') != -1) {
    return createDishesList(breakfast, clickedBtn);
  } else if (clickedBtnClasses.indexOf('lunch-btn') != -1) {
    return createDishesList(lunch, clickedBtn);
  } else {
    return createDishesList(dinner, clickedBtn);
  }
};

let createNewDish = () => {
  let categories = [];
  let newDishName = document.querySelector('#new-dish-name');
  let checkedCategories = document.querySelectorAll('.input-checkbox:checked');
  checkedCategories.forEach((item) => {
    categories.push(item.name);
  });
  let newDish = new constructorDish(
    8,
    2,
    convertText(newDishName.value),
    categories,
    ingridients
  );
  dishes.push(newDish);
  updateDishList();
  return;
};

//EVENTS-LISTENERS
//--new ingridient adding
addNewIngridientBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (checkIngridientsInputs()) {
    addIngridientsToList();
    showDishIngridientsList();
    getProductsList();
  }
});

//--dish modal closing
span.addEventListener('click', closeDishesModal);

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    closeDishesModal();
  }
});

//--naujo patiekalo modalo uzdarymo
spanNewDish.addEventListener('click', (e) => {
  modalNewDish.style.display = 'none';
  getProductsList();
  let alertMessage = document.querySelector(
    '.ingridients-inputs-alert-message'
  );
  alertMessage.innerText = '';
});

window.addEventListener('click', (e) => {
  if (e.target == modalNewDish) {
    modalNewDish.style.display = 'none';
    getProductsList();
    let alertMessage = document.querySelector(
      '.ingridients-inputs-alert-message'
    );
    alertMessage.innerText = '';
  }
});

//--dishes list modalo atidarymas
btn.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (event) => {
    searchDishInput.value = '';
    modal.style.display = 'block';
    searchDishInput.focus();
    if (event.target.className === 'box__weekday-buttons breakfast-btn') {
      createDishesList(breakfast, currentBtn);
    } else if (event.target.className === 'box__weekday-buttons lunch-btn') {
      createDishesList(lunch, currentBtn);
    } else {
      createDishesList(dinner, currentBtn);
    }
  });
});

//--window keydown, moving in lists
window.addEventListener('keydown', (e) => {
  let dishesListItems = dishesList.getElementsByTagName('li');
  let productsListItems = productsListTable.getElementsByTagName('tr');
  let dishesFiltered = getFilteredList(dishesListItems);

  let productsFilterd = getFilteredList(productsListItems);
  let dishesSelected = document.querySelector('.selected');
  let productSelected = document.querySelector('.selected-product');

  if (checkDishesModalActive()) {
    handlingArrowDownForList(e, dishesSelected, dishesFiltered, 'selected');
    handlingArrowUpForList(e, dishesSelected, dishesFiltered, 'selected');

    if (e.code === 'Enter') {
      if (dishesSelected) {
        let currentBtn = document.querySelector('.clicked');
        currentBtn.innerHTML = dishesSelected.textContent;
        closeDishesModal();
      }
    }
  }

  if (checkNewDishModalActive()) {
    handlingArrowDownForList(
      e,
      productSelected,
      productsFilterd,
      'selected-product'
    );
    handlingArrowUpForList(
      e,
      productSelected,
      productsFilterd,
      'selected-product'
    );

    if (e.code === 'Enter') {
      if (productSelected) {
        let unitsInput = document.querySelector('.product-units-input');
        let firstChild = productSelected.firstElementChild.innerText;
        let lastChild = productSelected.lastElementChild.innerText;
        productInput.value = firstChild;
        unitsInput.value = lastChild;
      }
    }
  }
});

//--productInput eventai
productInput.addEventListener('input', (e) => {
  getProductsList(e);
});
productInput.addEventListener('keyup', (event) => {
  event.preventDefault();
  searchInList(
    event,
    productInput,
    productsListTable,
    'tr',
    'td',
    'selected-product'
  );
});
productInput.addEventListener('keypress', (e) => {
  if (e.code == 'Enter') {
    e.preventDefault();
    return false;
  }
});

addNewProductBtn.addEventListener('click', createNewProductForm);
addNewProductForm.addEventListener('submit', addNewProductToList);

//--newDish events
addNewDishSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createNewDish();
});
