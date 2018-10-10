import categories from '../../categories';
import image from './image';
import { comments, objectId, ratings } from '../../generators';

const id = objectId();
const ratingsDocuments = ratings(3, id);
const ratingsSum = ratingsDocuments.reduce((sum, item) => sum + item.rating, 0);

const postCategories = ['Svenskt', 'Husmanskost'];

export default {
  _id: id,
  url: 'solrosen',
  label: 'Solrosen',
  address: {
    city: 'Göteborg',
    street: 'Kaponjargatan 4A'
  },
  cover: image,
  rating: Math.round((ratingsSum / ratings.length) * 10) / 10,
  ratings: ratings.length,
  images: [image],
  categories: categories.filter(category =>
    postCategories.includes(category.title)
  ),
  comments: comments(3, id)
};
