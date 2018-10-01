import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    facebookId: {
      type: String
    },
    googleId: {
      type: String
    },
    roles: {
      type: [Schema.Types.ObjectId],
      ref: 'roles',
      required: true
    }
  },
  {
    timestamps: true,
    id: false
  }
);
