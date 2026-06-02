import {formatCurrency} from '../scripts/utils/money.js';




console.log('convert cents into dollars');
if (formatCurrency(2095) == '20.95'){        //basic test case
  console.log('Test passed!');
} else {
  console.log('Test failed!');
}

console.log('works with zero cents');

if (formatCurrency(0) == '0.00'){                   //edge case
  console.log('Test passed!');
} else {
  console.log('Test failed!');
}

console.log('rounds to the nearest cent');
if (formatCurrency(2000.5) == '20.01'){  //In testing, an edge case is a test case that checks the behavior of a program at the boundary or extreme values of input
  console.log('Test passed!');
} else {
  console.log('Test failed!');
}