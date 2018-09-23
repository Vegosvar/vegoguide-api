export default ({ app, config }) => {
  app.post(`/${config.version}/posts`, (req, res) =>
    res.json({
      success: true,
      data: req.body
    })
  );
};
