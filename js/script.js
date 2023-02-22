window.onload = function () {
  var cart_btns = document.querySelectorAll('.js_cart_btn'),
  cart_cnt_icon = document.getElementById('js_cart_cnt'),
  cart_cnt = 0,
  clicked = [],
  save_items = [],
  items = JSON.parse(localStorage.getItem("items"));

  if (items) {
    var id;
    for (var i = 0; i < items.length; i++) {
      id = items[i].id;
      save_items.push(items[i]);
      clicked.push(id);
      activate_btn(id);
    }

    if(items.length != 0){
      cart_cnt_icon.parentNode.classList.remove('hidden');
      cart_cnt_icon.innerHTML = cart_cnt;
    }
  }

  cart_btns.forEach(function (cart_btn,index) {
    cart_btn.addEventListener('click',function () {

      if (clicked.indexOf(index) >= 0) {
        for (var i = 0; i < clicked.length; i++) {
          if(clicked[i] == index){
            clicked.splice(i, 1);
            save_items.splice(i, 1);
          }
        }

        inactivate_btn(index);

      }else if(clicked.indexOf(index) == -1){

        var name = cart_btn.dataset.name,
        price = Number(cart_btn.dataset.price);

        clicked.push(index);
        save_items.push({
          id: index,
          name: name,
          price: price
        });

        activate_btn(index);

      }

      localStorage.setItem("items",JSON.stringify(save_items));

    });
  });

  function activate_btn(index) {
    cart_cnt++;
    if( cart_cnt >= 1 ){
      cart_cnt_icon.parentNode.classList.remove('hidden');
    }
    cart_cnt_icon.innerHTML = cart_cnt;
    cart_btns[index].classList.add('item_cart_btn_active');
  }

  function inactivate_btn(index) {
    cart_cnt--;
    if(cart_cnt == 0){
      cart_cnt_icon.parentNode.classList.add('hidden');
    }
    cart_cnt_icon.innerHTML = cart_cnt;
    cart_btns[index].classList.remove('item_cart_btn_active');
  }

};