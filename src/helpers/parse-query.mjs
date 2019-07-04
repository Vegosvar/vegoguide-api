export default query =>
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
