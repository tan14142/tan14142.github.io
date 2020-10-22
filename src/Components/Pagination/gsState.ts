const state = {} as any;

export default (key: string, value?: any) => {
  if (value) {
    state[key] = value;
  }
  return state[key];
};