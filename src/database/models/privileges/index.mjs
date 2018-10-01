import schema from './schema';

export default ({ mongoose }) => mongoose.model('privileges', schema);
