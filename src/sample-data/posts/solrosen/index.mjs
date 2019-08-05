import images from '../../images';
import { objectId } from '../../generators';
import { getPostCategory } from '../../helpers';

const id = objectId();

const postCategories = ['Swedish cuisine', 'Swedish traditional cuisine'];

export default {
  _id: id,
  url: 'solrosen',
  title: 'Solrosen',
  address: {
    city: 'Göteborg',
    street: 'Kaponjargatan 4A'
  },
  cover: images[1],
  images: [images[1], images[2]],
  location: {
    coordinates: [11.9548101, 57.6989777]
  },
  categories: postCategories.map(getPostCategory)
};
