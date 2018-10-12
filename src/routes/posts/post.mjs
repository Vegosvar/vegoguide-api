export default ({ app, prefix }) => {
  app.post(`${prefix}/posts`, (req, res) =>
    res.json({
      success: true,
      data: req.body
    })
  );

  app.post(`${prefix}/posts/:url/rating`, (req, res) =>
    res.json({
      success: true,
      data: req.body
    })
  );

  app.post(`${prefix}/posts/:url/comment`, (req, res) =>
    res.json({
      success: true,
      data: req.body
    })
  );
};
