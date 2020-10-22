import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Power digit sum</h2>
        <h4>Problem 16</h4>
        <p>2¹⁵ = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.</p>
        <p>What is the sum of the digits of the number 2¹⁰⁰⁰?</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => BigInt(Math.pow(2, m))
          .toString()
          .split('')
          .reduce((acc, n) => +acc + +n);
    `}</CodePanel>
    </>
  );
};