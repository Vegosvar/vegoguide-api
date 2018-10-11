import hooks from './hooks';
import schema from './schema';

export default ({ mongoose, ...params }) => {
  hooks({ schema, ...params });
  return mongoose.model('ratings', schema);
};
