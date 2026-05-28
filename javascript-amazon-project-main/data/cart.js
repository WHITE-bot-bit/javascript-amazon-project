export const cart =[
   
];

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
    quantity: 1
  });}}