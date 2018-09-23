import sampleData from "./sample-data";
export default ({ app, database, helpers, prefix }) => {
  app.get(`${prefix}/posts`, (req, res) => {

    const { query = {} } = helpers.parseQuery(req.query);

    return res.json({
      success: true,
      data: sampleData.filter(post => !query.url || query.url.$in.indexOf(post.url) !== -1)
    });
  });

    res.json({
      success: true,
      data: sampleData.find(post => post.url === req.params.url)
    });
  app.get(`${prefix}/posts/:url`, (req, res) => {
  });
};
