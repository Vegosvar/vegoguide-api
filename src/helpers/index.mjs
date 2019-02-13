export const parseQuery = query =>
  Object.keys(query).reduce((parsedQuery, key) => {
    const newParsedQuery = { ...parsedQuery };

    try {
      newParsedQuery[key] = JSON.parse(query[key]);
    } catch (error) {
      console.error(error);

      newParsedQuery[key] = query[key];
    }

    return newParsedQuery;
  }, {});

export const getUrl = ({ host, path, port, protocol, version }) =>
  `${protocol}://${host}${port ? `:${port}` : ''}/${version}/${path}`;
