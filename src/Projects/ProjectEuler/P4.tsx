import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Largest palindrome product</h2>
        <h4>Problem 4</h4>
        <p>
          A palindromic number reads the same both ways. The largest palindrome
          made from the product of two 2-digit numbers is 9009 = 91 × 99.
        </p>
        <p>
          Find the largest palindrome made from the product of two 3-digit
          numbers.
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        () => {
          for (let i = 997; i > 100; i--) {
            for (let j = 999; j > 100; j--) {
              let p = +(String(i) + String(i).split("").reverse().join(""));
              if (p % j === 0 && j > 99 && j < 1000 && p / j > 99 && p / j < 1000) {
                return p;
              }
            }
          }
        }
    `}</CodePanel>
    </>
  );
};