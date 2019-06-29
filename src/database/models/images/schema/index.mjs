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
      thumbnail: {
        type: imageSizeSchema,
        required: true
      },
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
