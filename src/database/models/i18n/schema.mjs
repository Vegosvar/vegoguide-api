import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    message: {
      type: String,
      required: true
    },
    translation: {
      type: String,
      required: true
    },
    language: {
      type: String,
      enum: ['sv'],
      required: true
  },
  {
    collection: 'i18n',
    timestamps: true,
    id: false
  }
);
