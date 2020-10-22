import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Even Fibonacci numbers</h2>
        <h4>Problem 2</h4>
        <p>
          Each new term in the Fibonacci sequence is generated by adding the
          previous two terms. By starting with 1 and 2, the first 10 terms will
          be:
        </p>
        <div className="center">1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>
        <p>
          By considering the terms in the Fibonacci sequence whose values do not
          exceed four million, find the sum of the even-valued terms.
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          let
          i = 0,
          j = 1,
          k,
          result = 0;
  
          while (j <= m) {
            k = j;
            j += i;
            i = k;
            if (i % 2 === 0) {
              result += i;
            }
          }
          return result;
        }
    `}</CodePanel>
    </>
  );
};