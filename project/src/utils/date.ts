import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
const HOUR_IN_MS = 3600;

export const formatDate = (date: Date, format: string): string =>
  dayjs(date).format(format).toString();

export const formatFilmDuration = (period: number): string => dayjs
  .duration(period, 'minutes')
  .format('HH[h] mm[m]');

export const formatTimeUntilTheEnd = (time: number): string => {
  const format = time >= HOUR_IN_MS
    ? '-HH:mm:ss'
    : '-mm:ss';

  return dayjs.duration(time, 'seconds').format(format);
};
