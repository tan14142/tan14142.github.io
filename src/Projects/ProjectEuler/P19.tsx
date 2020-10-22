import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Counting Sundays</h2>
        <h4>Problem 19</h4>
        <p>
          You are given the following information, but you may prefer to do some
          research for yourself.
        </p>
        <ul
        className="browser-default"
        style={{ marginLeft: '1rem' }}>
          <li>1 Jan 1900 was a Monday.</li>
          <li>
            Thirty days has September,
            <br />
            April, June and November.
            <br />
            All the rest have thirty-one,
            <br />
            Saving February alone,
            <br />
            Which has twenty-eight, rain or shine.
            <br />
            And on leap years, twenty-nine.
          </li>
          <li>
            A leap year occurs on any year evenly divisible by 4,
            but not on a century unless it is divisible by 400.
          </li>
        </ul>
        <p>
          How many Sundays fell on the first of the month during the twentieth
          century (1 Jan 1901 to 31 Dec 2000)?
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        () => {
          let count = 0;
          for (let year = 1901; year <= 2000; year++) {
            for (let month = 0; month < 12; month++) {
              if ((new Date(year, month)).getDay() === 0) {
                count++;
              }
            }
          }
          return count;
        }
    `}</CodePanel>
    </>
  );
};