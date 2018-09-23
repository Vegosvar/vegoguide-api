export default ({ app, database, helpers, prefix }) => {
  app.get(`${prefix}/posts`, (req, res) => {
    const params = helpers.parseQuery(req.query);

    return database
      .model('posts')
      .find(params)
      .then((data = []) =>
        res.json({
          success: true,
          data
        })
      );
  });

  app.get(`${prefix}/posts/:url`, (req, res) => {
    const params = helpers.parseQuery(req.query);

    return database
      .model('posts')
      .find(params)
      .then((data = []) =>
        res.json({
          success: true,
          data
        })
      );
  });
};
