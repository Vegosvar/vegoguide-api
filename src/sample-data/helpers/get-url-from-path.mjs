import config from '../../../config';
import { getUrl } from '../../helpers';

export default path =>
  getUrl({
    ...config.api,
    ...config.api.public,
    path
  });
