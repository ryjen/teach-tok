export const hms = (timeStamp: number) => {
  const now = Date.now();
  const secondsPast = now - timeStamp;

  if (secondsPast < 60) {
    return "<1m";
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + "m";
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + "h";
  }
  return `>${parseInt(secondsPast / 3600)}h`;
};
