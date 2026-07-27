import { renderordersummary } from "../../scripts/checkout/ordersummary.js";
import {loadfromstorage,cart} from '../../data/cart.js';
import { renderpaymentsummary } from "../../scripts/checkout/paymentsummary.js";

describe('test suit: renderordersummary', () => {

const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

    beforeEach(() =>{
        spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
  <div class="js-order-summary"></div>
  <div class="js-payment-summary"></div>
  `;
  
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
  {
    productId: productId1,
    quantity: 2,
    deliveryoptionid:'1'
  },
   {
    productId: productId2,
    quantity: 1,
    deliveryoptionid:'2'
  }
]);
     });
     
      loadfromstorage();

      renderordersummary();
    });

 it('displayes the cart',() =>{
    expect(
      document.querySelectorAll('.js-cart-item-container').length).toEqual(2);

      expect(
        document.querySelector(`.js-product-quantity-${productId1}`)
      .innerText).toContain('Quantity: 2');

      expect(
        document.querySelector(`.js-product-quantity-${productId2}`)
      .innerText).toContain('Quantity: 1');
     
   
     });

   it('removes a product', () => {
      document.querySelector(`.js-delete-link-${productId1}`).click();

            expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);

            expect(
    document.querySelector(`.js-cart-item-conatiner-${productId1}`)
            ).toEqual(null);

            expect(
    document.querySelector(`.js-cart-item-conatiner-${productId2}`)
            ).not.toEqual(null);

      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual(productId2);


  
 });
 
    afterEach(() => {
      document.querySelector('.js-test-container').innerHTML = '';
    });

 });




