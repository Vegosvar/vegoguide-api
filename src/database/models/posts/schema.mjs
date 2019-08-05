import mongoose from 'mongoose';

const { Schema } = mongoose;

const AddressSchema = {
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
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
};

export default new Schema(
  {
    address: {
      type: AddressSchema
    },
    business: {
      type: Schema.Types.ObjectId,
      ref: 'businesses'
    },
    categories: {
      autopopulate: true,
      type: [Schema.Types.ObjectId],
      ref: 'categories',
      required: true
    },
    cover: {
      autopopulate: true,
      type: Schema.Types.ObjectId,
      ref: 'images',
      required: true
    },
    images: {
      autopopulate: true,
      type: [Schema.Types.ObjectId],
      ref: 'images'
    },
    title: {
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
      required: true,
      index: true,
      unique: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
