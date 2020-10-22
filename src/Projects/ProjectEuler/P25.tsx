import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>1000-digit Fibonacci number</h2>
        <h4>Problem 25</h4>
        <p>The Fibonacci sequence is defined by the recurrence relation:</p>
        <ol className="padded">
          <li>Fₙ = Fₙ₋₁ + Fₙ₋₂, where F₁ = 1 and F₂ = 1.</li>
        </ol>
        <p>Hence the first 12 terms will be:</p>
        <ol className="padded">
          <li>F₁ = 1</li>
          <li>F₂ = 1</li>
          <li>F₃ = 2</li>
          <li>F₄ = 3</li>
          <li>F₅ = 5</li>
          <li>F₆ = 8</li>
          <li>F₇ = 13</li>
          <li>F₈ = 21</li>
          <li>F₉ = 34</li>
          <li>F₁₀ = 55</li>
          <li>F₁₁ = 89</li>
          <li>F₁₂ = 144</li>
        </ol>
        <p>The 12th term, F12, is the first term to contain three digits.</p>
        <p>
          What is the index of the first term in the Fibonacci sequence to
          contain 1000 digits?
        </p>
      </section>
      <CodePanel title="JavaScript">{`
        m => {
          let
          counter = 3,
          f1 = BigInt(1),
          f2 = BigInt(1),
          f3 = BigInt(2),
          target = BigInt(m);

          while (f3 < target) {
            counter++;
            f1 = f2;
            f2 = f3;
            f3 = f1 + f2;
          }
          return counter;
        }
    `}</CodePanel>
    </>
  );
};
