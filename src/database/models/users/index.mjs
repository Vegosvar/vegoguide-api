import schema from './schema';

export default ({ mongoose }) => mongoose.model('users', schema);
