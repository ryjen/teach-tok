export const hms = (d: number) => {
  let value = Math.floor(d / 3600);

  if (value > 0) return `${value}h`;

  value = Math.floor((d % 3600) / 60);

  if (value > 0) return `${value}m`;

  value = Math.floor((d % 3600) % 60);
  return `${value}s`;
};
