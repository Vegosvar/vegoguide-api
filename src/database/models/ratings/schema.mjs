import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    rating: {
      type: Number
    }
  },
  {
    timestamps: true,
    id: false
  }
);
