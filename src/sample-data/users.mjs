import { objectId } from './generators';
import roles from './roles';

const userRole = roles.find(role => role.title === 'Users');

export default [
  {
    _id: objectId(),
    firstName: 'Georg',
    lastName: 'Marmelad',
    email: 'georg@marmelad.com',
    roles: [userRole]
  },
  {
    _id: objectId(),
    firstName: 'Katrine',
    lastName: 'Jèrkoblàĉive',
    email: 'katrine@jerkoblacive.com',
    roles: [userRole]
  }
];
