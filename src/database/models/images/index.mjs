import schema from './schema';

export default ({ mongoose, ...params }) => mongoose.model('images', schema(params));
