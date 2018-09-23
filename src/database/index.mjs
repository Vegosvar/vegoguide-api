import mongoose from 'mongoose';
import models from './models';

export default ({ config }) => {
  const { host, name } = config.database;
  const uri = `mongo://${host}/${name}`;

  // Register models
  Object.keys(models).forEach(key => {
    models[key]({ config, mongoose });
  });

  return mongoose.connect(
    uri,
    {
      useNewUrlParser: true
    }
  );
};
