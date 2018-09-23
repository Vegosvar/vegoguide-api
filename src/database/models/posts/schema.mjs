import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema({
  url: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  cover: {
    type: Schema.Types.ObjectId,
    ref: 'images'
  },
  categories: {
    type: [Schema.Types.ObjectId],
    ref: 'categories'
  },
  address: 'Kaponjargatan 4 A, Göteborg, Sverige',
  images: {
    type: [Schema.Types.ObjectId],
    ref: 'images'
  },
  rating: 4.51,
  ratings: 1031,
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'comments'
  }
});
