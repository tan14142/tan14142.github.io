import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Digit fifth powers</h2>
        <h4>Problem 30</h4>
        <p>
          Surprisingly there are only three numbers that can be written
          as the sum of fourth powers of their digits:
        </p>
        <div className="padded">
          1634 = 1⁴ + 6⁴ + 3⁴ + 4⁴
          <br />
          8208 = 8⁴ + 2⁴ + 0⁴ + 8⁴
          <br />
          9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴
        </div>
        <p>As 1 = 1⁴ is not a sum it is not included.</p>
        <p>The sum of these numbers is 1634 + 8208 + 9474 = 19316.</p>
        <p>
          Find the sum of all the numbers that can be written as the sum
          of fifth powers of their digits.
        </p>
      </section>
      <CodePanel title="JavaScript">{`
        m => {
          const
          powers = [...Array(10)].map(
            (value, key) => Math.pow(key, m)
          ),
          results = [],
          reverse = value => String(value).split('').reduce(
            (acc, base) => acc + Math.pow(+base, m),
            0
          ),
          sum = arr => arr.reduce(
            (acc, value) => acc + value,
            0
          ),
          f = offsets => {
            for (let i = offsets[offsets.length - 1]; i < 10; i++) {
              if (offsets.length < m + 1) {
                f([...offsets, i]);
              }
              else {
                const n = sum([...offsets.slice(1), i].map(
                  value => powers[value]
                ));
                
                if (!results.includes(n) && n === reverse(n)) {
                  results.push(n);
                }
              }
            }
          };
          f([0]);
          return sum(results) - 1;
        }
    `}</CodePanel>
    </>
  );
};