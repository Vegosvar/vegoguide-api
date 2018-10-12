export default ({ app, config }) => {
  app.get('/', (req, res) =>
    res.json({
      success: true,
      data: {
        name: config.api.name,
        version: config.api.version
      }
    })
  );
};
