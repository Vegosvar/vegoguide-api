import mongoose from 'mongoose';
import * as models from './models';

export default ({ config, ...params }) => {
  const { host, name, port, username, password } = config.database;
  const uri = `mongodb://${username}:${password}@${host}:${port}/${name}`;

  // Register models
  Object.keys(models).forEach(key => {
    models[key]({
      ...params,
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
