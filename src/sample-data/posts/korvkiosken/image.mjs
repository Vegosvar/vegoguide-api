import { objectId } from '../../generators';

export default {
  _id: objectId(),
  title: 'Korvkiosken',
  thumbnail: {
    mimeType: 'image/jpeg',
    path: 'uploads/images/korvkiosken_thumbnail.jpg',
    height: 682,
    width: 1024
  },
  original: {
    mimeType: 'image/jpeg',
    path: 'uploads/images/korvkiosken_original.jpg',
    height: 1333,
    width: 2000
  }
};
