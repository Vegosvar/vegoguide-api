export default ({ app, config }) => {
  app.get(`/${config.version}/pages`, (req, res) =>
    res.json({
      success: true,
      data: []
    })
  );

  app.get(`/${config.version}/pages/:id`, (req, res) =>
    res.json({
      success: true,
      data: []
    })
  );
}
