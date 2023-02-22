window.onload = function () {
  var items = JSON.parse(localStorage.getItem("items")),
  ele = document.getElementById('js_shopping_list'),
  fragment = document.createDocumentFragment(),
  total = 0,
  total_ele = document.getElementById('js_total'),
  confirm_btn = document.getElementById('js_confirm');

  if (items) {
    for (var i = 0; i < items.length; i++) {
      var li = document.createElement('li'),
      h3 = document.createElement('h3'),
      price = document.createElement('div');

      price.classList.add('price');
      
      h3.appendChild(document.createTextNode(items[i].name));
      price.appendChild(document.createTextNode(items[i].price));
      li.appendChild(h3);
      li.appendChild(price);
      fragment.appendChild(li);

      total = total + items[i].price;
    }
  }

  ele.appendChild(fragment);
  total_ele.innerHTML = 
  `
  <h2>Total Amount</h2>
  <div>$${total}</div>
  `;

  confirm_btn.addEventListener('click',function () {
    window.alert('Your purchase is confirmed.');
    localStorage.removeItem('items');
  });

};