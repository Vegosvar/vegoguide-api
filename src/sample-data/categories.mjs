import { objectId } from './generators';

const categories = ['Svenskt', 'Husmanskost', 'Snabbmat', 'Kiosk', 'Grill'];

export default categories.map(category => ({
  _id: objectId(),
  title: category
}));
