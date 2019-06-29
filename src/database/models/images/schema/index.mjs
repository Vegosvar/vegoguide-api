import mongoose from 'mongoose';
import ImageSizeSchema from './ImageSize';

const { Schema } = mongoose;

export default params => {
  const imageSizeSchema = ImageSizeSchema(params);

  return new Schema(
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
      // Width: 500px
      thumbnail: {
        type: imageSizeSchema,
        required: true
      },
      // Width: 1024px
      large: {
        type: imageSizeSchema,
        required: true
      },
      original: {
        type: imageSizeSchema,
        required: true
      }
    },
    {
      id: false,
      timestamps: true
    }
  );
};
