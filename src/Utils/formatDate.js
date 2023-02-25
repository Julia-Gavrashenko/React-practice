import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export const formatDate = postedAt => {
  return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
};

export const formatCryptoDate = date => {
  return format(Date.parse(date), 'Pp');
};
