import path from 'path';

export default ({ app, prefix }) => {
  app.get(`${prefix}/images/:image`, (req, res) => {
    const { image } = req.params;
    const imagePath = path.resolve(`public/images/${image}`);

    return res.sendFile(imagePath);  
  });
};
