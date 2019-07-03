export default ({ app, prefix }) => {
  app.post(`${prefix}/i18n/:language/:namespace`, (req, res) =>
    res.json({
      success: true,
      data: req.body
    })
  );
};
