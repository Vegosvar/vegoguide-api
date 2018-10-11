export default ({ schema }) => {
  schema.post('save', function postSave(ratingsDocument) {
    return this.model('ratings')
      .aggregate([
        {
          $match: {
            post: ratingsDocument.post
          }
        },
        {
          $group: {
            _id: null,
            count: {
              $sum: 1
            },
            sum: {
              $sum: '$rating'
            }
          }
        },
        {
          $project: {
            ratings: '$count',
            rating: {
              $divide: ['$count', '$sum']
            }
          }
        }
      ])
      .then(([{ ratings, rating }]) =>
        this.model('posts')
          .findOne({
            _id: ratingsDocument.post
          })
          .then(postDocument => {
            if (postDocument) {
              postDocument.ratings = ratings;
              postDocument.rating = Math.floor(rating * 100) / 100;

              return postDocument.save();
            }
          })
      );
  });
};
