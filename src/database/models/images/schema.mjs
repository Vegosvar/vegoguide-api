import mongoose from 'mongoose';

const { Schema } = mongoose;

const ImageSizeSchema = {
  height: {
    type: Number,
    required: true
  },
  // relative path
  path: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
};

export default new Schema(
  {
    title: {
      type: String,
      required: true
    },
    mimeType: {
      type: String,
      required: true,
      enum: ['image/jpeg', 'image/png']
    },
    thumbnail: {
      type: ImageSizeSchema,
      required: true
    },
    original: {
      type: ImageSizeSchema,
      required: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
