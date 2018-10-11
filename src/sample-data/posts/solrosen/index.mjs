import categories from '../../categories';
import images from '../../images';
import { objectId } from '../../generators';

const id = objectId();

const postCategories = ['Svenskt', 'Husmanskost'];
const image = images[1];

export default {
  _id: id,
  url: 'solrosen',
  label: 'Solrosen',
  address: {
    city: 'Göteborg',
    street: 'Kaponjargatan 4A'
  },
  cover: image,
  images: [image],
  categories: categories.filter(category =>
    postCategories.includes(category.title)
  )
};
