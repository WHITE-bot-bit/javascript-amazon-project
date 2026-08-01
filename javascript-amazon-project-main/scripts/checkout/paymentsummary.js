import {cart} from '../../data/cart.js';
import { getdeliveryoption } from '../../data/deliveryoption.js';
import {getproduct} from '../../data/products.js';
import {formatCurrency} from '../utils/money.js';
export function renderpaymentsummary() {

  let productpricecents = 0;
  let shippingpricecents = 0;
   cart.cartItems.forEach((cartitem) => {
 const product = getproduct(cartitem.productId);

 productpricecents += product.priceCents * cartitem.quantity;
    
 const deliveryoption= getdeliveryoption(cartitem.deliveryoptionid);
 shippingpricecents+=deliveryoption.priceCents;

   })

const totalbeforetax = productpricecents+shippingpricecents;
const taxcents = totalbeforetax*0.1;

const totalcents =totalbeforetax + taxcents;


const paymentsummaryhtml =`
   <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
            $${formatCurrency(productpricecents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingpricecents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalbeforetax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxcents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${
           formatCurrency(totalcents) }</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;
          document.querySelector('.js-payment-summary').innerHTML = paymentsummaryhtml;
}