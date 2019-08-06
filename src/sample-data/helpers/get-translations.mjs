import i18n from '../i18n';

export default (str, namespace = 'en') => {
  const message = i18n.find(
    localeMessage =>
      localeMessage.namespace === namespace && localeMessage.message === str
  );

  return (message && message.translation) || '';
};
