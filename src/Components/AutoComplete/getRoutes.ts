import Routes from '../../Router/Routes.json';
import includeDash from '../../Router/includeDash';

export default () => {
  return Routes.reduce((acc, entry) => {
    acc[includeDash(entry.name, entry.path)] = null;
    return acc;
  }, {} as any)
};