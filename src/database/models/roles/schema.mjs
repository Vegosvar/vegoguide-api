import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    title: {
      type: String,
      required: true
    },
    privileges: {
      type: [Schema.Types.ObjectId],
      ref: 'privileges',
      required: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
