export default (name: string, path: string) => {
  return path.substring(0, path.lastIndexOf('/') + 1)
       + name.replace(/\s/g, '-');
};