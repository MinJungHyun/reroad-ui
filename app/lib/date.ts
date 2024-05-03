import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export const dayjsSimple = (date: Date) => {
  return dayjs(date).format('A HH:mm');
};

