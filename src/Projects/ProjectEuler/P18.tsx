import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Maximum path sum I</h2>
        <h4>Problem 18</h4>
        <p>
          By starting at the top of the triangle below and moving to adjacent
          numbers on the row below, the maximum total from top to bottom is 23.
        </p>
        <div className="center font-mono">
          <span className="red-text">3</span>
          <br />
          <span className="red-text">7</span> 4
          <br />
          2 <span className="red-text">4</span> 6
          <br />
          8 5 <span className="red-text">9</span> 3
        </div>
        <p>That is, 3 + 7 + 4 + 9 = 23.</p>
        <p>Find the maximum total from top to bottom of the triangle below:</p>
        <div className="center font-mono nowrap">
          <div style={{ minWidth: 480 }}>
            75
            <br />
            95 64
            <br />
            17 47 82
            <br />
            18 35 87 10
            <br />
            20 04 82 47 65
            <br />
            19 01 23 75 03 34
            <br />
            88 02 77 73 07 63 67
            <br />
            99 65 04 28 06 16 70 92
            <br />
            41 41 26 56 83 40 80 70 33
            <br />
            41 48 72 33 47 32 37 16 94 29
            <br />
            53 71 44 65 25 43 91 52 97 51 14
            <br />
            70 11 33 28 77 73 17 78 39 68 17 57
            <br />
            91 71 52 38 17 14 91 43 58 50 27 29 48
            <br />
            63 66 04 68 89 53 67 30 73 16 69 87 40 31
            <br />
            04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
          </div>
        </div>
        <p>
          NOTE: As there are only 16384 routes, it is possible to solve this
          problem by trying every route. However, Problem 67, is the same
          challenge with a triangle containing one-hundred rows; it cannot be
          solved by brute force, and requires a clever method! ;o)
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        () => {
          let
          data = [
            [75],
            [95, 64],
            [17, 47, 82],
            [18, 35, 87, 10],
            [20, 4, 82, 47, 65],
            [19, 1, 23, 75, 3, 34],
            [88, 2, 77, 73, 7, 63, 67],
            [99, 65, 4, 28, 6, 16, 70, 92],
            [41, 41, 26, 56, 83, 40, 80, 70, 33],
            [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
            [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
            [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
            [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
            [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
            [4, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 4, 23]
          ];

          for (let row = data.length - 2; row >= 0; row--) {
            data[row] = data[row].map((val, col) => val + Math.max(
              data[row + 1][col], data[row + 1][col + 1]
            ));
          }
          return data[0][0];
        }
    `}</CodePanel>
    </>
  );
};