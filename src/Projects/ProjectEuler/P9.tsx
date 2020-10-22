import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Special Pythagorean triplet</h2>
        <h4>Problem 9</h4>
        <p>
          A Pythagorean triplet is a set of three natural numbers, a &lt; b &lt;
          c, for which,
        </p>
        <div className="center">a² + b² = c²</div>
        <p>For example, 3² + 4² = 9 + 16 = 25 = 5².</p>
        <p>
          There exists exactly one Pythagorean triplet for which a + b + c = 1000.
        </p>
        <p>Find the product abc.</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          const
          h = Math.ceil(m / 2),
          s = 6 * m;

          for (let a = 1; a < h; a++) {
            let b = (2 * m * a - m * m) / (2 * (a - m));
            if (b % 1 === 0) {
              return String([a, b, m - a - b])
            }
          }
          return 'no integers found';
        }
    `}</CodePanel>
    </>
  );
};