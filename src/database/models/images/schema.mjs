import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema({
  title: {
    type: String,
    required: true
  },
  sizes: {
    type: [
      {
        height: {
          type: Number,
          required: true
        },
        mimeType: {
          type: String,
          enum: ['image/jpeg', 'image/png']
        },
        path: {
          type: String,
          required: true
        },
        width: {
          type: Number,
          required: true
        }
      }
    ]
  }
});
