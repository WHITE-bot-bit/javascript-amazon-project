    import {cart,removefromcart,udatedeliveryoption} from "../../data/cart.js";
    import {products,getproduct} from "../../data/products.js";
    import {formatCurrency} from "../utils/money.js";
    import {hello} from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
    import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';//default export
    import {deliveryoptions,getdeliveryoption} from "../../data/deliveryoption.js";
    import { renderpaymentsummary } from "./paymentsummary.js";
    

  
    export function renderordersummary() {


    let cartsummaryhtml = '';

    cart.forEach((cartItem) => {

      const productId = cartItem.productId;
    const matchingProduct = getproduct(productId);

    const deliveryoptionid = cartItem.deliveryoptionid;

const deliveryoption = getdeliveryoption(deliveryoptionid);




    const today = dayjs();
        const deliveryDate = today.add(deliveryoption.deliverydays,'day');
        const datestring = deliveryDate.format('dddd, MMMM D');

          cartsummaryhtml +=
      
      `  <div class="cart-item-container
            js-cart-item-container
      js-cart-item-conatiner-${matchingProduct.id}">
                <div class="delivery-date">
                  Delivery date: ${datestring}
                </div>

                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src="${matchingProduct.image}">

                  <div class="cart-item-details">
                    <div class="product-name">
                      ${matchingProduct.name}
                    </div>
                    <div class="product-price">
                      $${formatCurrency(matchingProduct.priceCents)}
                    </div>
                    <div class="product-quantity
                    js-product-quantity-${matchingProduct.id}">
                      <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                      </span>
                      <span class="update-quantity-link link-primary">
                        Update
                      </span>
                      <span class="delete-quantity-link js-delete-link link-primary
                      js-delete-link-${matchingProduct.id}"
                      data-product-id="${matchingProduct.id}">
                        Delete
                      </span>
                    </div>
                  </div>

                  <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    ${deliveryoptionhtml(matchingProduct,cartItem)}
                  </div>
                </div>
              </div>`
    });


    function deliveryoptionhtml(matchingProduct,cartItem) {

      let html = '';
      deliveryoptions.forEach((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliverydays,'day');
        const datestring = deliveryDate.format('dddd, MMMM D');//to format date in the way we want
        const priceString = deliveryOption.priceCents === 0 ? 'FREE Shipping' : `$${formatCurrency(deliveryOption.priceCents)} - Shipping`;

    const ischecked =deliveryOption.id === cartItem.deliveryoptionid;


        html += `
          <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
                      <input type="radio"
                        ${ischecked ? 'checked' : ''}
                        class="delivery-option-input"
                        name="delivery-option-${matchingProduct.id}">
                      <div>
                        <div class="delivery-option-date">
                          ${datestring}
                        </div>
                        <div class="delivery-option-price">
                          ${priceString}
                        </div>
                      </div>
                    </div>
        `
      });
      return html;
    }

    document.querySelector('.js-order-summary').innerHTML = cartsummaryhtml;

    //console.log(cartsummaryhtml);

    document.querySelectorAll('.js-delete-link').forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        removefromcart(productId);
        
        const container=document.querySelector(`.js-cart-item-conatiner-${productId}`);
        container.remove();


        renderpaymentsummary();
      });
    });


    document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
      const { productId, deliveryOptionId } = element.dataset;
        udatedeliveryoption(productId,deliveryOptionId);
        renderordersummary();
        renderpaymentsummary();
    })
    });
    }


    