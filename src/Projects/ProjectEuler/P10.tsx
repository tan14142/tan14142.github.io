import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Summation of primes</h2>
        <h4>Problem 10</h4>
        <p>The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.</p>
        <p>Find the sum of all the primes below two million.</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          let
          a = Array(m + 1).fill(true),
          p = [];
          
          a[0] = a[1] = false;
          a.map((v, k) => {
            if (v) {
              p.push(k);
              for (let i = k * k; i <= m; i += k) {
                a[i] = false;
              }
            }
          });

          return p.reduce((acc, n) => acc + n);
        }
    `}</CodePanel>
    </>
  );
};