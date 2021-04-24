function getIngridientsList() {
  let products = JSON.parse(sessionStorage.getItem('ingridients'));
  console.log(products);
  sessionStorage.removeItem('ingridients');
  sessionStorage.clear();
  let output = '';
  console.log(products);
  products.forEach((product) => {
    output += `
    <div class="products__item">
          <div>
            <input
              type="checkbox"
              name="${product.name}"
              class="input-checkbox"
              id="${product.name}"
            />
            <label for="${product.name}">${product.name}</label>
          </div>
          <input id="${product.name}" type="text" value="${product.quantity}" class="quantity" readonly />
          <input type="text" value="${product.units}" name="${product.units}" class="units" readonly />
    </div>
    `;
  });

  document.querySelector('.products').innerHTML = output;
}

getIngridientsList();
