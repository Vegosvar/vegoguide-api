import { objectId } from './generators';
import i18n from './i18n';

const categoriesMessages = i18n.filter(
  ({ namespace }) => namespace === 'postCategories'
);

const categories = categoriesMessages.reduce(
  (categoriesByMessage, { _id, language, message }) => {
    if (!(message in categoriesByMessage)) {
      // eslint-disable-next-line no-param-reassign
      categoriesByMessage[message] = {
        _id: objectId(),
        title: {}
      };
    }

    categoriesByMessage[message].title[language] = _id; // eslint-disable-line no-param-reassign

    return categoriesByMessage;
  },
  {}
);

export default Object.values(categories);
