export default ({ app, config, database }) => {
  app.get("/", (req, res) =>
    res.json({
      success: true,
      data: {
        name: config.name,
        version: config.version
      }
    })
  );
};
