import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Lexicographic permutations</h2>
        <h4>Problem 24</h4>
        <p>
          A permutation is an ordered arrangement of objects. For example, 3124
          is one possible permutation of the digits 1, 2, 3 and 4. If all of the
          permutations are listed numerically or alphabetically, we call it
          lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
        </p>
        <div className="center font-mono">012 021 102 120 201 210</div>
        <p>
          What is the millionth lexicographic permutation of the digits 0, 1, 2,
          3, 4, 5, 6, 7, 8 and 9?
        </p>
      </section>
      <CodePanel title="JavaScript">{`
        m => {
          let
          objects = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          permutations = objects.reduce((acc, value, key) => acc * (key + 1), 1),
          result = [],
        
          f = target => {
            let counter = 0;
            permutations /= objects.length;
            while (counter * permutations < target) counter++;
            result.push(objects.splice(--counter, 1));
            
            if (objects.length) {
              f(target - counter * permutations);
            }
            return result;
          }
          return +f(m).join('');
        }
    `}</CodePanel>
    </>
  );
};
