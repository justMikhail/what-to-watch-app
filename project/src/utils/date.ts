import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const formatDate = (date: Date, format: string): string =>
  dayjs(date).format(format).toString();

export const formatFilmDuration = (period: number): string => dayjs
  .duration(period, 'minutes')
  .format('HH[h] mm[m]');
