import mongoose from 'mongoose';

const { Schema } = mongoose;

export default () =>
  new Schema(
    {
      height: {
        type: Number,
        required: true
      },
      // relative path
      path: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        required: true
      }
    },
    {
      id: false,
      _id: false
    }
  );
