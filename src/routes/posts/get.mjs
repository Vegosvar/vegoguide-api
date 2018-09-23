import sampleData from "./sample-data";

export default ({ app, config, helpers }) => {
  app.get(`/${config.version}/posts`, (req, res) => {
    const { query = {} } = helpers.parseQuery(req.query);

    return res.json({
      success: true,
      data: sampleData.filter(post => !query.url || query.url.$in.indexOf(post.url) !== -1)
    });
  });

  app.get(`/${config.version}/posts/:url`, (req, res) => {
    res.json({
      success: true,
      data: sampleData.find(post => post.url === req.params.url)
    });
  });
};
