export default ({ app, prefix }) => {
  app.post(`${prefix}/posts`, (req, res) =>
    res.json({
      success: true,
      data: req.body
    })
  );
};
