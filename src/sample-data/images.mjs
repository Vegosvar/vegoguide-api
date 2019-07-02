import { objectId } from './generators';

export default [
  {
    _id: objectId(),
    title: 'Korvkiosken',
    mimeType: 'image/jpeg',
    thumbnail: {
      path: 'images/korvkiosken_thumbnail.jpg',
      height: 281,
      width: 500
    },
    large: {
      path: 'images/korvkiosken_large.jpg',
      height: 575,
      width: 1024
    },
    original: {
      path: 'images/korvkiosken_original.jpg',
      height: 1123,
      width: 2000
    }
  },
  {
    _id: objectId(),
    title: 'Solrosens uteservering',
    mimeType: 'image/jpeg',
    thumbnail: {
      path: 'images/solrosen_thumbnail.jpg',
      height: 333,
      width: 500
    },
    large: {
      path: 'images/solrosen_large.jpg',
      height: 682,
      width: 1024
    },
    original: {
      path: 'images/solrosen_original.jpg',
      height: 1333,
      width: 2000
    }
  }
];
