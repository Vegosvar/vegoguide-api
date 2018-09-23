import schema from './schema';

export default ({ mongoose }) => mongoose.model('categories', schema);
