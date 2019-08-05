import categories from '../categories';
import i18n from '../i18n';

const postCategories = i18n.filter(({ namespace }) => namespace === 'postCategories')

export default title => {
  const translationMessages = postCategories.filter(({ message }) => message === title);

  return categories
    .find(category =>
      translationMessages.some(
        translationMessage => translationMessage._id === category.title.en
      )
    )
};
