import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    roles: {
      type: Schema.Types.ObjectId,
      ref: 'roles'
    }
  },
  {
    timestamps: true,
    id: false
  }
);
