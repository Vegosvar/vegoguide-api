import common from './common';
import languages from './languages';
import postCategories from './post-categories';
import { objectId } from '../generators';

const localeMessages = [...common, ...languages, ...postCategories];

export default localeMessages.reduce(
  (allLocales, message) => [
    ...allLocales,
    {
      _id: objectId(),
      ...message
    },
    {
      _id: objectId(),
      message: message.message,
      translation: message.message,
      namespace: message.namespace,
      language: 'en'
    }
  ],
  []
);
