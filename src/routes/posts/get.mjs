export default ({ app, db, helpers, prefix }) => {
  app.get(`${prefix}/posts`, (req, res) => {
    const {
      query,
      limit = 200,
      skip = 0,
      sort = {
        _id: 1
      }
    } = helpers.parseQuery(req.query);

    return db
      .model('posts')
      .find(query)
      .skip(skip)
      .limit(limit)
      .sort(sort)
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
      .find({
        url: req.params.url,
        ...params
      })
      .then((data = []) =>
        res.json({
          success: true,
          data
        })
      );
  });

  app.get(`${prefix}/posts/:url/ratings`, (req, res) => {
    const params = helpers.parseQuery(req.query);

    return db
      .model('posts')
      .findOne(
        {
          url: req.params.url
        },
        {},
        {
          autopopulate: false
        }
      )
      .select({
        _id: true
      })
      .then(post => {
        if (post) {
          return db.model('ratings').find({
            post: post._id,
            ...params
          });
        }

        throw new Error('Post not found');
      })
      .then((data = []) =>
        res.json({
          success: true,
          data
        })
      );
  });

  app.get(`${prefix}/posts/:url/comments`, (req, res) => {
    const params = helpers.parseQuery(req.query);

    return db
      .model('posts')
      .findOne(
        {
          url: req.params.url
        },
        {},
        {
          autopopulate: false
        }
      )
      .select({
        _id: true
      })
      .then(post => {
        if (post) {
          return db.model('comments').find({
            post: post._id,
            ...params
          });
        }

        throw new Error('Post not found');
      })
      .then((data = []) =>
        res.json({
          success: true,
          data
        })
      );
  });
};
