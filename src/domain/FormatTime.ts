export const hms = (timeStamp: number) => {
  const now = Date.now();
  const secondsPast = now - timeStamp;

  if (secondsPast < 60) {
    return "<1m";
  }
  if (secondsPast < 3600) {
    return Math.trunc(secondsPast / 60) + "m";
  }
  if (secondsPast <= 86400) {
    return Math.trunc(secondsPast / 3600) + "h";
  }
  return `>${Math.trunc(secondsPast / 3600)}h`;
};
