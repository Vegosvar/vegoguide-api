import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema({
  address: {
    type: [
      {
        city: {
          type: String
        },
        street: {
          type: String
        },
        postcode: {
          type: String
        },
        location: [
          {
            type: {
              type: String,
              enum: ['Point'],
              default: 'Point'
            },
            coordinates: {
              type: [Number],
              required: true
            }
          }
        ]
      }
    ]
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: 'business'
  },
  categories: {
    type: [Schema.Types.ObjectId],
    ref: 'categories',
    required: true
  },
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'comments'
  },
  cover: {
    type: Schema.Types.ObjectId,
    ref: 'images',
    required: true
  },
  images: {
    type: [Schema.Types.ObjectId],
    ref: 'images'
  },
  label: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  ratings: {
    type: Number
  },
  url: {
    type: String,
    required: true
  }
});
