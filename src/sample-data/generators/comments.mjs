import objectId from './object-id';
import { getRandomElementInArray } from '../helpers';
import users from '../users';

const comments = [
  'Bad food, would not go back',
  'Excellent service, loved it! Recommended',
  'Cosy location, friendly staff',
  'Nope, not for me. Maybe suits someone else',
  'Hell yeah!',
  'Too crowded',
  'Too much food!'
];

export default (count, postId) => new Array(count).fill(0).map(() => ({
    comment: getRandomElementInArray(comments),
    _id: objectId(),
    post: postId,
    user: getRandomElementInArray(users)
  }));
