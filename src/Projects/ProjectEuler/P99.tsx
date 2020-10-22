import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Largest exponential</h2>
        <h4>Problem 99</h4>
        <p>
          Comparing two numbers written in index form like 2¹¹ and 3⁷ is not
          difficult, as any calculator would confirm that 2¹¹ = 2048 &lt; 3⁷ =
          2187.
        </p>
        <p>
          However, confirming that 632382⁵¹⁸⁰⁶¹ &gt; 519432⁵²⁵⁸⁰⁶ would be much
          more difficult, as both numbers contain over three million digits.
        </p>
        {/* prettier-ignore */}
        <p>
          Using <a href="/Projects/Project-Euler/P9.txt">base_exp.txt</a> (right click and 'Save Link/Target As...'), a 22K text file containing one thousand lines with a base/exponent pair on each line, determine which line number has the greatest numerical value.
        </p>
        <p>
          NOTE: The first two lines in the file represent the numbers in the
          example given above.
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          const
          { csvParseRows, values } = require('d3'),
          fs = require('fs'),    
          buffer = fs.readFileSync(process.cwd() + '/public/Projects/Project-Euler/P99.txt'),
          data = csvParseRows(String(buffer));

          let
          c = 0,
          r = '';
          m = m || data.length;

          for (let i = 0; i < m; i++) {
            let
            v = values(data[i]),
            p = Math.log(v[0]) * v[1];
            if (p > c) {
              c = p;
              r = v.join();
            }
          }
          return r;
        }
    `}</CodePanel>
    </>
  );
};