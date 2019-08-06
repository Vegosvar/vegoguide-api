import { objectId } from './generators';
import { getTranslationMessages, getUrlFromPath } from './helpers';

const getTitle = title =>
  getTranslationMessages(title).reduce(
    (messages, message) => ({
      ...messages,
      [message.language]: message._id
    }),
    {}
  );

export default [
  {
    _id: objectId(),
    title: getTitle('The hot dog stand'),
    mimeType: 'image/jpeg',
    thumbnail: {
      path: 'images/korvkiosken_thumbnail.jpg',
      url: getUrlFromPath('images/korvkiosken_thumbnail.jpg'),
      height: 281,
      width: 500
    },
    large: {
      path: 'images/korvkiosken_large.jpg',
      url: getUrlFromPath('images/korvkiosken_large.jpg'),
      height: 575,
      width: 1024
    },
    original: {
      path: 'images/korvkiosken_original.jpg',
      url: getUrlFromPath('images/korvkiosken_original.jpg'),
      height: 1123,
      width: 2000
    }
  },
  {
    _id: objectId(),
    title: getTitle('Solrosen\'s outdoor sitting area'),
    mimeType: 'image/jpeg',
    thumbnail: {
      path: 'images/solrosen_thumbnail.jpg',
      url: getUrlFromPath('images/solrosen_thumbnail.jpg'),
      height: 333,
      width: 500
    },
    large: {
      path: 'images/solrosen_large.jpg',
      url: getUrlFromPath('images/solrosen_large.jpg'),
      height: 682,
      width: 1024
    },
    original: {
      path: 'images/solrosen_original.jpg',
      url: getUrlFromPath('images/solrosen_original.jpg'),
      height: 1333,
      width: 2000
    }
  },
  {
    _id: objectId(),
    title: getTitle('Auburgine stew'),
    mimeType: 'image/jpeg',
    thumbnail: {
      path: 'images/solrosen_2_thumbnail.jpg',
      url: getUrlFromPath('images/solrosen_2_thumbnail.jpg'),
      height: 281,
      width: 500
    },
    large: {
      path: 'images/solrosen_2_large.jpg',
      url: getUrlFromPath('images/solrosen_2_large.jpg'),
      height: 575,
      width: 1024
    },
    original: {
      path: 'images/solrosen_2_original.jpg',
      url: getUrlFromPath('images/solrosen_2_original.jpg'),
      height: 562,
      width: 1000
    }
  },
  {
    _id: objectId(),
    title: getTitle('Interior'),
    mimeType: 'image/jpeg',
    thumbnail: {
      path: 'images/blackbird_thumbnail.jpg',
      url: getUrlFromPath('images/blackbird_thumbnail.jpg'),
      height: 281,
      width: 500
    },
    large: {
      path: 'images/blackbird_large.jpg',
      url: getUrlFromPath('images/blackbird_large.jpg'),
      height: 575,
      width: 1024
    },
    original: {
      path: 'images/blackbird_original.jpg',
      url: getUrlFromPath('images/blackbird_original.jpg'),
      height: 1123,
      width: 2000
    }
  },
  {
    _id: objectId(),
    title: getTitle('Tasty burger with potato sides'),
    mimeType: 'image/jpeg',
    thumbnail: {
      path: 'images/blackbird_2_thumbnail.jpg',
      url: getUrlFromPath('images/blackbird_2_thumbnail.jpg'),
      height: 281,
      width: 500
    },
    large: {
      path: 'images/blackbird_2_large.jpg',
      url: getUrlFromPath('images/blackbird_2_large.jpg'),
      height: 575,
      width: 1024
    },
    original: {
      path: 'images/blackbird_2_original.jpg',
      url: getUrlFromPath('images/blackbird_2_original.jpg'),
      height: 1123,
      width: 2000
    }
  }
];
