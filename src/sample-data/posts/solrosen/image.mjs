import { objectId } from '../../generators';

export default {
  _id: objectId(),
  title: 'Solrosens uteservering',
  thumbnail: {
    mimeType: 'image/jpeg',
    path: 'uploads/images/solrosen_thumbnail.jpg',
    height: 682,
    width: 1024
  },
  original: {
    mimeType: 'image/jpeg',
    path: 'uploads/images/solrosen_original.jpg',
    height: 1333,
    width: 2000
  }
};
