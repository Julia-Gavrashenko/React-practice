import { formatDistanceToNow } from 'date-fns'

export const formatDate= (postedAt) => {
    return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
}
    
    
   