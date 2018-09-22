export default ({ app, config }) => {
  app.post(`/${config.version}/pages`, (req, res) =>
    res.json({
      success: true,
      data: req.body
    })
  );
};
