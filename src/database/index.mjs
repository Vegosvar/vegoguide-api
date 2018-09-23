import mongoose from 'mongoose';
import * as models from './models';

export default ({ config }) => {
  const { host, name, port } = config.database;
  const uri = `mongodb://${host}:${port}/${name}`;

  // Register models
  Object.keys(models).forEach(key => {
    models[key]({
      config,
      mongoose
    });
  });

  return mongoose.connect(
    uri,
    {
      useNewUrlParser: true
    }
  );
};
