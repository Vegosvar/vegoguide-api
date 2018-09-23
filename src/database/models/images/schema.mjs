import { Schema } from 'mongoose';
import FileSchema from '../files/schema';

export default new Schema({
  title: {
    type: String,
    required: true
  },
  sizes: [
    FileSchema.discriminator('image', {
      mimeType: {
        type: String,
        enum: ['image/jpeg', 'image/png']
      },
      height: {
        type: Number,
        required: true
      },
      width: {
        type: Number,
        required: true
      }
    })
  ]
});
