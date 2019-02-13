import autopopulate from 'mongoose-autopopulate';
import schema from './schema';

export default ({ mongoose }) => {
  schema.plugin(autopopulate);

  return mongoose.model('posts', schema);
};
