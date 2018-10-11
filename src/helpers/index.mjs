export const parseQuery = query =>
  Object.keys(query).reduce(
    (parsedQuery, key) => ({
      ...parsedQuery,
      [key]: JSON.parse(query[key])
    }),
    {}
  );

export const getUrl = ({ host, path, port, protocol, version }) =>
  `${protocol}://${host}${port ? `:${port}` : ''}/${version}/${path}`;
