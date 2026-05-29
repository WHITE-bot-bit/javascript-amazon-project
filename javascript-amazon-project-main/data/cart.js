export let cart = JSON.parse(localStorage.getItem('cart')) || //if there is no cart in local storage then we will use empty array as default value

 [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryoptionid:'1'
  },
   {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryoptionid:'2'
  }
];

function savetostorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

 export function addtocart(productId) {
let matchingItem;
    cart.forEach((CartItem) => {
      if (CartItem.productId === productId) {//👉 to uniquely identify each product name are not reliable
        matchingItem = CartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity++;
    } else {
  cart.push({
    productId: productId,
    quantity: 1,
    deliveryoptionid:'1'
  });}
savetostorage();
}


 export function removefromcart(productId) {
      const newcart =[];
      cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newcart.push(cartItem);
        } });

        cart = newcart;

        savetostorage();
  }
  /*Create empty cart
//Check every item
//Skip the item to remove
//Put all remaining items into new cart
//Replace old cart with new cart*/