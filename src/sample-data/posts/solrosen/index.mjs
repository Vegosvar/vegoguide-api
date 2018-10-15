import categories from '../../categories';
import images from '../../images';
import { objectId } from '../../generators';

const id = objectId();

const postCategories = ['Svenskt', 'Husmanskost'];
const image = images[1];

export default {
  _id: id,
  url: 'solrosen',
  title: 'Solrosen',
  address: {
    city: 'Göteborg',
    street: 'Kaponjargatan 4A'
  },
  cover: image,
  images: [image],
  location: {
    coordinates: [11.9548101, 57.6989777]
  },
  categories: categories.filter(category =>
    postCategories.includes(category.title)
  )
};
