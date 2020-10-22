import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Quadratic primes</h2>
        <h4>Problem 27</h4>
        <p>Euler discovered the remarkable quadratic formula:</p>
        <div className="center">n² + n + 41</div>
        <p>
          It turns out that the formula will produce 40 primes for the
          consecutive integer values 0 ≤ n ≤ 39. However, when
          n = 40, 40² + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and
          certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.
        </p>
        <p>
          The incredible formula n² - 79n + 1601 was discovered, which
          produces 80 primes for the consecutive values 0 ≤ n ≤ 79. The
          product of the coefficients, -79 and 1601, is -126479.
        </p>
        <p>Considering quadratics of the form:</p>
        <div className="center">
          n² + an + b, where |a| &lt; 1000 and |b| ≤ 1000
          <br />
          where |n| is the modulus/absolute value of n
          <br />
          e.g. |11| = 11 and |-4| = 4
        </div>
        <p>
          Find the product of the coefficients, a and b, for the quadratic
          expression that produces the maximum number of primes for
          consecutive values of n, starting with n = 0.
        </p>
      </section>
      <CodePanel title="JavaScript">{`
        m => {
          const primes = Array(m + 1).fill(true);
          primes[0] = primes[1] = false;
          
          for (let i = 2; i < Math.sqrt(m); i++) {
            if (primes[i]) {
              for (let j = i * i; j <= m; j += i) {
                primes[j] = false;
              }
            }
          }
          
          let
          result = { max: 0 },
          swapB = b => {
            let a = m % 2
              ? -m + 2
              : -m + 1;
            
            for (; a < m; a += 2) {
            
              let n = 0;
              
              while (primes[n * n + n * a + b]) {
                n++;
              }
              
              if (n > result.max) {
                result = {
                  a: a,
                  b: b,
                  max: n
                };
              }
            }
          };
          
          for (let i = m; i >= 0; i--) {
            if (primes[i]) {
              swapB(i);
              swapB(-i);
            }
          }

          return result.a * result.b;
        }
    `}</CodePanel>
    </>
  );
};