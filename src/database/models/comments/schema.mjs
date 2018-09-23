import mongoose from 'mongoose';

const { Schema } = mongoose;

export default new Schema({
  comment: {
    type: String
  },
  user: {
    type: [Schema.Types.ObjectId],
    ref: 'users'
  }
});
