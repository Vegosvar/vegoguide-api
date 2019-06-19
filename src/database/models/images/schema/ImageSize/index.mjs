import mongoose from 'mongoose';

const { Schema } = mongoose;

export default ({ config, helpers }) => {
  const schema = new Schema({
    height: {
      type: Number,
      required: true
    },
    // relative path
    path: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  }, {
    id: false,
    _id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

  schema.virtual('url').get(function getUrl() {
    return helpers.getUrl({
      ...config.api,
      ...config.api.public,
      path: this.path
    });
  });

  return schema;
}
