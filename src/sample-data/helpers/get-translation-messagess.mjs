import i18n from '../i18n';

export default message => {
  return i18n.filter(localeMessage => localeMessage.message === message);
};
