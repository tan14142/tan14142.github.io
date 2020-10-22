import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import P1 from './P1';
import P2 from './P2';
import P3 from './P3';
import P4 from './P4';
import P5 from './P5';
import P6 from './P6';
import P7 from './P7';
import P8 from './P8';
import P9 from './P9';
import P10 from './P10';
import P11 from './P11';
import P12 from './P12';
import P14 from './P14';
import P15 from './P15';
import P20 from './P20';
import P21 from './P21';
import P22 from './P22';
import P23 from './P23';
import P24 from './P24';
import P25 from './P25';
import P99 from './P99';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

function evalCode(component, parameter) {
  act(() => {
    ReactDOM.render(React.createElement(component), container);
  });
  //eslint-disable-next-line
  const f = eval(container.querySelector('code').textContent);
  return f(parameter);
}

test('P1: sum of 10 is 23', () => {
  expect(evalCode(P1, 10)).toBe(3 + 5 + 6 + 9);
});

test('P2: sum of even fibonacci of 100 is 44', () => {
  expect(evalCode(P2, 100)).toBe(2 + 8 + 34);
});

test('P3: largest prime number of 13195 is 29', () => {
  expect(evalCode(P3, 13195)).toBe(29);
});

test('P4: largest palindrom from the product of 2 3-digit numbers', () => {
  expect(evalCode(P4, 3)).toBe(993 * 913);
});

test('P5: smallest multiple evenly divisibled between 1 and 10', () => {
  expect(evalCode(P5, 10)).toBe(2520);
});

test('P6: Sum square difference of 10 is 2640', () => {
  expect(evalCode(P6, 10)).toBe(2640);
});

test('P7: 6th prime is 13', () => {
  expect(evalCode(P7, 6)).toBe(13);
});

test('P8: Largest product in a series of 4 is 5832', () => {
  expect(evalCode(P8, 4)).toBe(5832);
});

test('P9: Pythagorean triplet for 25 is 3, 4, 5', () => {
  expect(evalCode(P9, 12)).toBe('3,4,5');
});

test('P10: Sum of primes below 10 is 17', () => {
  expect(evalCode(P10, 10)).toBe(17);
  expect(evalCode(P10, 2000000)).toBe(142913828922);
});

test('P11: Heighest product in the matrix is 70600674', () => {
  expect(evalCode(P11, )).toBe(70600674);
});

test('P12: First triangular number with more than 5 is 28', () => {
  expect(evalCode(P12, 5)).toBe(28);
  expect(evalCode(P12, 500)).toBe(76576500);
});

test('P14: Collatz sequence within 13 is 10', () => {
  expect(evalCode(P14, 1000000)).toBe(837799);
});

test('P15: Lattice paths of 3 is 20', () => {
  expect(evalCode(P15, 3)).toBe(20);
  expect(evalCode(P15, 20)).toBe(137846528820);
});

test('P20: Factorial digit sum of 100 is 648', () => {
  expect(evalCode(P20, 100)).toBe(648);
});

test('P21: Amicable numbers', () => {
  expect(evalCode(P21, 1000)).toBe(504);
  expect(evalCode(P21, 10000)).toBe(31626);
});

test('P22: Names scores', () => {
  expect(evalCode(P22)).toBe(871198282);
});

test('P23: Non-abundant sums', () => {
  expect(evalCode(P23)).toBe(4179871);
});

test('P24: Lexicographic permutations', () => {
  expect(evalCode(P24, 1000000)).toBe(2783915460);
});

test('P25: 1000-digit Fibonacci number', () => {
  expect(evalCode(P25, '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')).toBe(4782);
});

test('P99: Largest exponential', () => {
  expect(evalCode(P99, 2)).toBe('632382,518061');
});