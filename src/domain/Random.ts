export const range = (min: number, max: number): number =>
  Math.trunc(Math.random() * (max - min) + min);

export const shuffler = () => Math.random() - 0.5;
