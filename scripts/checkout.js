import {renderordersummary} from './checkout/ordersummary.js';

import {renderpaymentsummary} from './checkout/paymentsummary.js';
import {loadProducts,loadProductsfetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

//import '../data/cart-class.js';

//import '../data/bakend-practice.js';



async function loadpage(){
 try{
   // throw 'error1';
  await loadProductsfetch();

 const value = await new Promise((resolve, reject) => {
   // throw 'error2';
        loadCart(() => {
            //reject('error3');
           resolve('3');
        });  
     });
       

 } catch (error){
  console.error('Error loading page');
 }

     renderordersummary();
    renderpaymentsummary();

}
loadpage();

/*
Promise.all([
  loadProductsfetch(),

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
*/
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