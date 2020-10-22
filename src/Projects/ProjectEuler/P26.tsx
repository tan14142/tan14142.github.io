import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Reciprocal cycles</h2>
        <h4>Problem 26</h4>
        <p>
          A unit fraction contains 1 in the numerator. The decimal
          representation of the unit fractions with denominators
          2 to 10 are given:
        </p>
        <ol className="padded">
          <li>½	= 0.5</li>
          <li>⅓	= 0.(3)</li>
          <li>¼	= 0.25</li>
          <li>⅕	= 0.2</li>
          <li>⅙	= 0.1(6)</li>
          <li>⅐	= 0.(142857)</li>
          <li>⅛	= 0.125</li>
          <li>⅑	= 0.(1)</li>
          <li>⅒	= 0.1</li>
        </ol>
        <p>
          Where 0.1(6) means 0.166666..., and has a 1-digit recurring
          cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
        </p>
        <p>
          Find the value of d &lt; 1000 for which 1/d contains the longest
          recurring cycle in its decimal fraction part.
        </p>
      </section>
      <CodePanel title="JavaScript">{`
        m => {
          let
          maxIndex = 0,
          maxLength = 0;
        
          for (let i = m; i > 1; --i) {
          
            let
            counter = 0,
            dividend = 1,
            length = 0,
            reciprocals = [],
            remainder = 1;
            
            while (true) {
              dividend = remainder * 10;
              remainder = dividend % i;
              
              if (remainder === 0) {
                break;
              }
              if (reciprocals[remainder]) {
                length = counter - reciprocals[remainder];
                break;
              }
              
              reciprocals[remainder] = counter++;
            }
            
            if (length > maxLength) {
              maxIndex = i;
              maxLength = length;
            }
          }
          return maxIndex;
        }
    `}</CodePanel>
    </>
  );
};