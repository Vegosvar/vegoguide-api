import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    title: {
      type: String,
      required: true
    },
    privilege: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
