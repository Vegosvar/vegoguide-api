import categories from '../../categories';
import images from '../../images';
import { comments, objectId, ratings } from '../../generators';

const id = objectId();
const ratingsDocuments = ratings(3, id);
const ratingsSum = ratingsDocuments.reduce((sum, item) => sum + item.rating, 0);

const postCategories = ['Kiosk', 'Snabbmat', 'Grill'];
const image = images[0]

export default {
  _id: id,
  url: 'korv-kiosken-i-majorna',
  label: 'Korvkiosken i Majorna',
  address: {
    city: 'Göteborg',
    street: 'Mariagatan 6',
    postcode: 41471
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
