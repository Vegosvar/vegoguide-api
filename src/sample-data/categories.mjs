import { objectId } from './generators';

const categories = ['Swedish', 'Swedish husmanskost', 'Fast food', 'Kiosk', 'Grill'];

export default categories.map(category => ({
  _id: objectId(),
  title: category
}));
