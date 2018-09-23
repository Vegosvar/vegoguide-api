import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    rating: {
      type: Number
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }
  },
  {
    timestamps: true,
    id: false
  }
);
