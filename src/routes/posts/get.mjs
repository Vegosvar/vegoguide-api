export default ({ app, config, db, helpers, prefix }) => {
  app.get(`${prefix}/posts`, (req, res) => {
    const {
      query = {},
      limit = 200,
      skip = 0,
      sort = {
        _id: 1
      }
    } = helpers.recursiveRestoreNativeTypes(helpers.parseQuery(req.query));

    const language =
      req.headers['accept-language'] || config.api.defaultLanguage;

    return db
      .model('posts')
      .aggregate([
        {
          // Lookup categories
          $lookup: {
            from: 'categories',
            as: 'categories',
            let: { categories: '$categories' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: ['$_id', '$$categories']
                  }
                }
              },
              {
                $group: {
                  _id: {
                    _id: '$_id',
                    title: `$title.${language}`
                  }
                }
              },
              {
                $replaceRoot: {
                  newRoot: '$_id'
                }
              },
              // Lookup translation for each category's title
              {
                $lookup: {
                  from: 'i18n',
                  as: 'title',
                  let: { title: '$title' },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ['$_id', '$$title']
                        }
                      }
                    }
                  ]
                }
              },
              // Convert resulting array to an object
              {
                $replaceRoot: {
                  newRoot: {
                    $mergeObjects: [
                      '$$ROOT',
                      {
                        title: {
                          $ifNull: [
                            { $arrayElemAt: ['$title.translation', 0] },
                            null
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          // Lookup images
          $lookup: {
            from: 'images',
            as: 'images',
            let: { images: '$images' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: ['$_id', '$$images']
                  }
                }
              },
              {
                $group: {
                  _id: {
                    _id: '$_id',
                    title: `$title.${language}`,
                    large: '$large.url',
                    original: '$original.url',
                    thumbnail: '$thumbnail.url'
                  }
                }
              },
              {
                $replaceRoot: {
                  newRoot: '$_id'
                }
              },
              // Lookup translation for each image's title
              {
                $lookup: {
                  from: 'i18n',
                  as: 'title',
                  let: { title: '$title' },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ['$_id', '$$title']
                        }
                      }
                    }
                  ]
                }
              },
              // Convert resulting array to an object
              {
                $replaceRoot: {
                  newRoot: {
                    $mergeObjects: [
                      '$$ROOT',
                      {
                        title: {
                          $ifNull: [
                            { $arrayElemAt: ['$title.translation', 0] },
                            null
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          $lookup: {
            from: 'images',
            as: 'cover',
            let: { cover: '$cover' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$_id', '$$cover']
                  }
                }
              },
              {
                $group: {
                  _id: {
                    _id: '$_id',
                    title: `$title.${language}`,
                    large: '$large.url',
                    original: '$original.url',
                    thumbnail: '$thumbnail.url'
                  }
                }
              },
              {
                $replaceRoot: {
                  newRoot: '$_id'
                }
              },
              // Lookup translation cover image's title
              {
                $lookup: {
                  from: 'i18n',
                  as: 'title',
                  let: { title: '$title' },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ['$_id', '$$title']
                        }
                      }
                    }
                  ]
                }
              },
              // Convert resulting array to an object
              {
                $replaceRoot: {
                  newRoot: {
                    $mergeObjects: [
                      '$$ROOT',
                      {
                        title: {
                          $ifNull: [
                            { $arrayElemAt: ['$title.translation', 0] },
                            null
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [
                '$$ROOT',
                {
                  cover: {
                    $ifNull: [{ $arrayElemAt: ['$cover', 0] }, null]
                  }
                }
              ]
            }
          }
        },
        {
          $match: query
        },
        {
          $skip: skip
        },
        {
          $limit: limit
        },
        {
          $sort: sort
        }
      ])
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
