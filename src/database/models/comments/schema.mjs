import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'posts',
      required: true
    },
    user: {
      type: [Schema.Types.ObjectId],
      ref: 'users',
      required: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
