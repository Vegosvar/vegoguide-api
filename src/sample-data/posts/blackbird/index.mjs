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
    postcode: 41463,
    location: {
      coordinates: [11.9358273, 57.6994605]
    }
  },
  cover: images[3],
  images: [images[3], images[4]],
  categories: postCategories.map(getPostCategory)
};
