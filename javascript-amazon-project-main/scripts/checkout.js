import {renderordersummary} from './checkout/ordersummary.js';

import {renderpaymentsummary} from './checkout/paymentsummary.js';
import {loadProducts} from '../data/products.js';

//import '../data/cart-class.js';

//import '../data/bakend-practice.js';
loadProducts(() => {
    renderordersummary();
    renderpaymentsummary();
});
