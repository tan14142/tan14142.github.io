import { csvParse } from 'd3';

export default async (response: Response) => {
  const
  data = csvParse(await response.text()) as any[],
  sets = new Array(1960).fill(null);

  data.forEach((series, key) => {
    const
    years = Object.entries(series),
    type = years.pop()![1],
    region = years.pop()![1];

    for (const [year, value] of years) {
      if (key === 0) {
        sets[+year] = [];
      }
      if (key % 2 === 0) {
        sets[+year].push({[region as string]: {}})
      }
      sets[+year][sets[+year].length - 1][region as string][type as string] = value;
    }
  });
  return sets;
};