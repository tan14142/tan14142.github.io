import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Largest prime factor</h2>
        <h4>Problem 3</h4>
        <p>The prime factors of 13195 are 5, 7, 13 and 29.</p>
        <p>What is the largest prime factor of the number 600851475143 ?</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          const primes = [];
          let i = 3;

          while (i < m) {
            if (m % i === 0 && primes.every(p => i % p)) {
              primes.push(i);
              if (primes.reduce((p1, p2) => p1 * p2) === m) {
                return primes.pop();
              }
            }
            i += 2;
          }
        }
    `}</CodePanel>
    </>
  );
};