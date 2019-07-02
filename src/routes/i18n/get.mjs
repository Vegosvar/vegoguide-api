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
            language: '$_id',
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
