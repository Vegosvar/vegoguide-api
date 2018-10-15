import categories from '../../categories';
import images from '../../images';
import { objectId } from '../../generators';

const postCategories = ['Kiosk', 'Snabbmat', 'Grill'];
const image = images[0];

export default {
  _id: objectId(),
  url: 'korv-kiosken-i-majorna',
  title: 'Korvkiosken i Majorna',
  address: {
    city: 'Göteborg',
    street: 'Mariagatan 6',
    postcode: 41471
  },
  cover: image,
  images: [image],
  categories: categories.filter(category =>
    postCategories.includes(category.title)
  )
};
