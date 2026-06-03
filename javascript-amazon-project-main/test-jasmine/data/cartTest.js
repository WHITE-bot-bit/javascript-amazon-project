import {addtocart,cart,loadfromstorage} from '../../data/cart.js';

describe('test suit: addToCart', () => {
   it('adds an existing product to the cart', () => {
    spyOn(localStorage,'setItem');

       spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([
      {
        productId: 'a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a',
        quantity: 1,
        deliveryoptionid:'1'
      }
    ]);
   });
   
    loadfromstorage();
     addtocart('a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a' );
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a');
      expect(cart[0].quantity).toEqual(2);
   

       
   });

   it('adds a new product to cart', () => {

    spyOn(localStorage,'setItem');/* Replaces the real function with a fake spy
                                        doesn't actually save anything
                                        Instead the spy records:
                                         setItem was called*/

   spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([]);
   });
   
    loadfromstorage();

      addtocart('a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a' );
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a');
      expect(cart[0].quantity).toEqual(1);
   });
});