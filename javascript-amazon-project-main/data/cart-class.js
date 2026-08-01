class Cart{
     cartItems ;
     #localStorageKey;//both are undefined default value
     

     constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;  //#means private property

    this.#loadfromstorage();
     }

      #loadfromstorage(){        //private method
this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || //if there is no cart in local storage then we will use empty array as default value

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
} 


 savetostorage(){         //short hand for function definition
  localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
}


  addtocart(productId) {
let matchingItem;
    this.cartItems.forEach((CartItem) => {
      if (CartItem.productId === productId) {//👉 to uniquely identify each product name are not reliable
        matchingItem = CartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity++;
    } else {
  this.cartItems.push({
    productId: productId,
    quantity: 1,
    deliveryoptionid:'1'
  });}
this.savetostorage();
}


  removefromcart(productId) {
      const newcart =[];
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newcart.push(cartItem);
        } });

        this.cartItems = newcart;

        this.savetostorage();
  }
  /*Create empty cart
//Check every item
//Skip the item to remove
//Put all remaining items into new cart
//Replace old cart with new cart*/


 udatedeliveryoption(productId,deliveryoptionid){
  let matchingItem;

    this.cartItems.forEach((CartItem) => {
      if (CartItem.productId === productId) {
        matchingItem = CartItem;
      }
    });

    matchingItem.deliveryoptionid = deliveryoptionid;

    this.savetostorage();

}

}


const cart = new Cart('cart-oop');                             //create new instance of cart class
const buisnesscart = new Cart('business-cart');                      //create new instance of cart class




console.log(cart);
console.log(buisnesscart);