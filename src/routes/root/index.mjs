export default ({ app, config, prefix }) => {
  app.get(prefix, (req, res) =>
    res.json({
      success: true,
      data: {
        name: config.name,
        version: config.version
      }
    })
  );
};
