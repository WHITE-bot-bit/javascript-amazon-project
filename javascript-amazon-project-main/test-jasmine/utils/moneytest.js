import {formatCurrency} from '../../scripts/utils/money.js';

describe ('test suit: formatCurrency', () => {
  it('convert cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');        //basic test case
  });

  it('works with zero cents', () => {
    expect(formatCurrency(0)).toEqual('0.00');                   //edge case
  } );

  it('rounds to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');  //In testing, an edge case is a test case that checks the behavior of a program at the boundary or extreme values of input
  } );
} )
