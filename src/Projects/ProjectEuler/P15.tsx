import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Lattice paths</h2>
        <h4>Problem 15</h4>
        <p>
          Starting in the top left corner of a 2×2 grid, and only being able to
          move to the right and down, there are exactly 6 routes to the bottom
          right corner.
        </p>
        <div className="center">
          <img alt="Lattice paths" src="/Projects/Project-Euler/P15.png" />
        </div>
        <p>How many such routes are there through a 20×20 grid?</p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        m => {
          const f = (n, limit) => {
            let prod = 1;
            for (let i = n; i > limit; i -= 1) {
              prod *= i;
            }
            return prod;
          }
          return Math.round(f(m * 2, m) / f(m, 1));
        }
    `}</CodePanel>
    </>
  );
};