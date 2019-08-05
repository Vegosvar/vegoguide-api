import images from '../../images';
import { objectId } from '../../generators';
import { getPostCategory } from '../../helpers';

const postCategories = ['Kiosk', 'Fast food', 'Grill'];

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
  location: {
    coordinates: [11.920477, 57.6862985]
  },
  categories: postCategories.map(getPostCategory)
};
