import mongoose from 'mongoose';
import ImageSizeSchema from './ImageSize';

const { Schema } = mongoose;

export default params => {
  const imageSizeSchema = ImageSizeSchema(params);

  return new Schema(
    {
      title: {
        en: {
          type: Schema.Types.ObjectId,
          ref: 'i18n',
        },
        sv: {
          type: Schema.Types.ObjectId,
          ref: 'i18n',
        },
      },
      description: {
        en: {
          type: Schema.Types.ObjectId,
          ref: 'i18n',
        },
        sv: {
          type: Schema.Types.ObjectId,
          ref: 'i18n',
        },
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
