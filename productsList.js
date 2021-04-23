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
          <input type="checkbox" name="${product.name}" id="" />
          <label for="${product.name}">${product.name}</label>
          <input type="text" value="${product.quantity}" />
          <input type="text" value="${product.units}" name="${product.units}"/>
    </div>
    `;
  });

  document.querySelector('.products').innerHTML = output;
}

getIngridientsList();
