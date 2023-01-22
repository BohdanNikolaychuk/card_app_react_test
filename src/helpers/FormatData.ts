import Moment from 'moment';

export function FormatData(time: string) {
  return Moment(time).format('MMM Do YY');
}
