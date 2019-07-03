import common from './common';
import languages from './languages';
import postCategories from './post-categories';

const localeMessages = [...common, ...languages, ...postCategories];

const defaultLocaleMessages = localeMessages.reduce(
  (allLocales, message) => [
    ...allLocales,
    {
      message: message.message,
      translation: message.message,
      namespace: message.namespace,
      language: 'en'
    }
  ],
  []
);

export default [...localeMessages, ...defaultLocaleMessages];
