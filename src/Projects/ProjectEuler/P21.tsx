import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Amicable numbers</h2>
        <h4>Problem 21</h4>
        <p>
          Let d(n) be defined as the sum of proper divisors of n (numbers less
          than n which divide evenly into n).
        </p>
        <p>
          If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable
          pair and each of a and b are called amicable numbers.
        </p>
        <p>
          For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20,
          22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284
          are 1, 2, 4, 71 and 142; so d(284) = 220.
        </p>
        <p>Evaluate the sum of all the amicable numbers under 10000.</p>
      </section>
      <CodePanel title="JavaScript">{`
        m => {
          let
          sumOfAmicables = 0,
          sumsOfDivisors = new Array(m).fill(1);

          for (let i = 2; i < m; i++) {
            for (let j = i + i; j < m; j += i) {
              sumsOfDivisors[j] += i;
            }
            if (sumsOfDivisors[i] !== i && sumsOfDivisors[sumsOfDivisors[i]] === i) {
              sumOfAmicables += i;
            }
          }
          return sumOfAmicables;
        }
    `}</CodePanel>
    </>
  );
};