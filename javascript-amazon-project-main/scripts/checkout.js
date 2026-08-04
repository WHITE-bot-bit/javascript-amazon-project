import {renderordersummary} from './checkout/ordersummary.js';

import {renderpaymentsummary} from './checkout/paymentsummary.js';
import {loadProducts} from '../data/products.js';
import {loadCart} from '../data/cart.js';

//import '../data/cart-class.js';

//import '../data/bakend-practice.js';

Promise.all([
    new Promise((resolve) => {
    
    loadProducts(() =>{   
        resolve('value1');
    });

}),
  new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });  
     })

]).then((value) => {
    console.log(value);
     renderordersummary();
    renderpaymentsummary();
});

/*

new Promise((resolve) => {
    
    loadProducts(() =>{   
        resolve('value1');
    });

}).then((value) => {
console.log(value);
     return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });  
     });
     
}).then(() => {
    renderordersummary();
    renderpaymentsummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
      renderordersummary();
    renderpaymentsummary();
    });
});
*/