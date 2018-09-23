import mongoose from 'mongoose';

const { Schema } = mongoose;

const ImageSizeSchema = {
  height: {
    type: Number,
    required: true
  },
  mimeType: {
    type: String,
    required: true,
    enum: ['image/jpeg', 'image/png']
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
    sizes: {
      thumbnail: ImageSizeSchema,
      large: ImageSizeSchema,
      original: ImageSizeSchema
    }
  },
  {
    timestamps: true,
    id: false
  }
);
