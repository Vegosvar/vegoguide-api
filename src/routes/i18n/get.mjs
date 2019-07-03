export default ({ app, db, prefix }) => {
  app.get(`${prefix}/i18n`, (req, res) => {
    return db
      .model('i18n')
      .aggregate([
        {
          $group: {
            _id: null,
            languages: {
              $addToSet: '$language'
            }
          }
        },
        {
          $project: {
            _id: 0,
            languages: '$languages'
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

  app.get(`${prefix}/i18n/:language/`, (req, res) => {
    const { language } = req.params;

    return db
      .model('i18n')
      .aggregate([
        {
          $match: {
            language
          }
        },
        {
          $group: {
            _id: '$language',
            namespaces: {
              $addToSet: '$namespace'
            }
          }
        },
        {
          $project: {
            _id: 0,
            language: '$_id',
            namespaces: '$namespaces'
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

  app.get(`${prefix}/i18n/:language/:namespace`, (req, res) => {
    const { language, namespace } = req.params;

    return db
      .model('i18n')
      .aggregate([
        {
          $match: {
            language,
            namespace
          }
        },
        {
          $group: {
            _id: {
              language: '$language',
              namespace: '$namespace'
            },
            messages: {
              $push: {
                message: '$message',
                translation: '$translation'
              }
            }
          }
        },
        {
          $project: {
            _id: 0,
            language: '$_id.language',
            namespace: '$_id.namespace',
            messages: '$messages'
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
