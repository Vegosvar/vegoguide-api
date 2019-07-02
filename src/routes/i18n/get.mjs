export default ({ app, db, prefix }) => {
  app.get(`${prefix}/i18n/:language`, (req, res) => {
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
            documents: {
              $push: '$$ROOT'
            }
          }
        },
        {
          $replaceRoot: {
            newRoot: {
              [language]: '$documents'
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
