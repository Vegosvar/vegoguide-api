import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    title: {
      type: String
    },
    type: {
      type: String
    }
  },
  {
    timestamps: true,
    id: false
  }
);
