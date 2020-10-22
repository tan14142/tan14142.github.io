import React from 'react';
import CodePanel from '../../Components/CodePanel';

export default () => {
  return (
    <>
      <section className="accent-bottom panel">
        <h2>Number letter counts</h2>
        <h4>Problem 17</h4>
        <p>
          If the numbers 1 to 5 are written out in words: one, two, three, four,
          five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
        </p>
        <p>
          If all the numbers from 1 to 1000 (one thousand) inclusive were written
          out in words, how many letters would be used?
        </p>
        <p>
          NOTE: Do not count spaces or hyphens. For example, 342 (three hundred
          and forty-two) contains 23 letters and 115 (one hundred and fifteen)
          contains 20 letters. The use of "and" when writing out numbers is in
          compliance with British usage.
        </p>
      </section>
      {/* prettier-ignore */}
      <CodePanel title="JavaScript">{`
        () => {
          const
          dict = [
            ,
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
            'twenty',,,,,,,,,,
            'thirty',,,,,,,,,,
            'forty',,,,,,,,,,
            'fifty',,,,,,,,,,
            'sixty',,,,,,,,,,
            'seventy',,,,,,,,,,
            'eighty',,,,,,,,,,
            'ninety'
          ];
          
          let
          temp,
          res = '';
          
          for (let i = 20; i < 100; i++) {
            if (dict[i]) {
              temp = dict[i];
            }
            else {
              dict[i] = temp + dict[i % 10]; 
            }
          }

          for (let i = 1; i <= 1000; i++) {
            if (i === 1000) {
              res += 'onethousand'
              break;
            }
            if (i > 99) {
              res += dict[Math.floor(i / 100)] + 'hundred';
              
              if (i % 100) {
                res += 'and';
              }
              else {
                continue;
              }
            }
            res += dict[i % 100];
          }
          return res.length;
        }
    `}</CodePanel>
    </>
  );
};