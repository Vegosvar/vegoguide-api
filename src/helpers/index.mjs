export const parseQuery = query =>
  Object.keys(query).reduce(
    (parsedQuery, key) => ({
      ...parsedQuery,
      [key]: JSON.parse(query[key])
    }),
    {}
  );
