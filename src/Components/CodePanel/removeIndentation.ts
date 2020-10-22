export default (text: string) => {
  const lines = text.split(/\r|\n/);
  lines.pop();
  lines.shift();

  const indentation = lines[0].match(/^\s+/g) || [];

  return (indentation
    ? lines.map((line) => line.replace(indentation[0], ''))
    : lines
  ).join('\r\n');
};