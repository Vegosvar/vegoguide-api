import mongoose from 'mongoose';

export default ({ app, config, db, helpers, prefix }) => {
  app.get(`${prefix}/categories`, (req, res) => {
    const {
      query = {},
      limit = 200,
      skip = 0,
      sort = {
        count: -1
      }
    } = helpers.parseQuery(req.query);

    const language =
      req.headers['accept-language'] || config.api.defaultLanguage;

    // We only ever want to return categories which are used in a posts
    // therefore we lookup the posts first and then the categories

    // TODO: This query should be cached
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
          $unwind: '$categories'
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
        },
        {
          $replaceRoot: {
            newRoot: {
              _id: '$categories._id',
              title: '$categories.title'
            }
          }
        }
      ])
      .then((data = []) =>
        res.json({
          success: true,
          data
        })
      );
  });

  app.get(`${prefix}/categories/:category`, (req, res) => {
    const { query = {} } = helpers.parseQuery(req.query);
    const _id = mongoose.Types.ObjectId(req.params.category);

    const language =
      req.headers['accept-language'] || config.api.defaultLanguage;

    return db
      .model('categories')
      .aggregate([
        {
          $match: {
            ...query,
            _id
          }
        },
        {
          $replaceRoot: {
            newRoot: {
              _id: '$_id',
              title: `$_id.title.${language}`
            }
          }
        }
      ])
      .then((data = []) =>
        res.json({
          success: true,
          data
        })
      );
  });
};
