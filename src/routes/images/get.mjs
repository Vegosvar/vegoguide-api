export default ({ app, db, helpers, prefix }) => {
  app.get(`${prefix}/posts`, (req, res) => {
    const params = helpers.parseQuery(req.query);

    return db
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

    return db
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
