import images from '../../images';
import { objectId } from '../../generators';
import { getPostCategory } from '../../helpers';

const postCategories = ['Pub', 'Bar', 'Burgers', 'Swedish traditional cuisine'];

export default {
  _id: objectId(),
  url: 'blackbird',
  title: 'Blackbird',
  address: {
    city: 'Göteborg',
    street: 'Stigbergsliden 3',
    postcode: 41463
  },
  cover: images[3],
  images: [images[3], images[4]],
  location: {
    coordinates: [11.920477, 57.6862985]
  },
  categories: postCategories.map(getPostCategory)
};
