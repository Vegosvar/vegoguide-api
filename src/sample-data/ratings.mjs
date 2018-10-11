import { objectId } from './generators';
import { getRandomNumberInRange } from './helpers';

export default (count, postId) =>
  new Array(count).fill(0).map(() => ({
    _id: objectId(),
    post: postId,
    rating: getRandomNumberInRange(0, 5)
  }));
