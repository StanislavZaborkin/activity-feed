export default (date: Date) => {
  if (!date) return 0;
  const today = new Date();
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const getUTC = (d: Date) =>
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  const utc1 = getUTC(today);
  const utc2 = getUTC(date);

  return Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY));
};
