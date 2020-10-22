import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Longest Collatz sequence</h2>
        <h4>Problem 14</h4>
        <p>
          The following iterative sequence is defined for the set of positive
          integers:
        </p>
        <div className="center font-mono">n → n/2 (n is even)</div>
        <div className="center font-mono">n → 3n + 1 (n is odd)</div>
        <p>
          Using the rule above and starting with 13, we generate the following
          sequence:
        </p>
        <div className="center font-mono">13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>
        <p>
          It can be seen that this sequence (starting at 13 and finishing at 1)
          contains 10 terms. Although it has not been proved yet (Collatz
          Problem), it is thought that all starting numbers finish at 1.
        </p>
        <p>
          Which starting number, under one million, produces the longest chain?
        </p>
        <p>
          NOTE: Once the chain starts the terms are allowed to go above one
          million.
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          let
          max = 0,
          n,
          terms = [, 1];
          
          const f = i => {
            let next;
            if (i % 2) {
              next = i * 3 + 1;
            }
            else {
              next = i / 2;
            }
            if (!terms[next]) {
              f(next);
            }
            terms[i] = terms[next] + 1;
            return terms[next] + 1;
          }
          for (let i = 2; i < m; i++) {
            if (!terms[i] && max < f(i)) {
              max = terms[i];
              n = i;
            }
          }
          return n;
        }
    `}</CodePanel>
    </>
  );
};