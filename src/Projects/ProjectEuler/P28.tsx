import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Number spiral diagonals</h2>
        <h4>Problem 28</h4>
        <p>
          Starting with the number 1 and moving to the right in a
          clockwise direction a 5 by 5 spiral is formed as follows:
        </p>
        <div className="center font-mono nowrap">
          <span className="red-text">21</span>
          {' '}
          22 23 24
          {' '}
          <span className="red-text">25</span>
          <br />
          20
          &nbsp;
          <span className="red-text">7</span>
          &nbsp;
          8
          &nbsp;
          <span className="red-text">9</span>
          {' '}
          10
          <br />
          19 &nbsp;6
          &nbsp;
          <span className="red-text">1</span>
          &nbsp;
          2 11
          <br />
          18
          &nbsp;
          <span className="red-text">5</span>
          &nbsp;
          4
          &nbsp;
          <span className="red-text">3</span>
          {' '}
          12
          <br />
          <span className="red-text">17</span>
          {' '}
          16 15 14
          {' '}
          <span className="red-text">13</span>
        </div>
        <p>
          It can be verified that the sum of the numbers on the diagonals
          is 101.
        </p>
        <p>
          What is the sum of the numbers on the diagonals in a 1001 by
          1001 spiral formed in the same way?
        </p>
      </section>
      <CodePanel title="JavaScript">{`
        m => {
          const n = Math.floor(m / 2);
          return 16 / 3 * Math.pow(n, 3) + 10 * Math.pow(n, 2) + 26 / 3 * n + 1;
        }
    `}</CodePanel>
    </>
  );
};