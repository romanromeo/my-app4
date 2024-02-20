const { app, PORT } = require('./server');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
