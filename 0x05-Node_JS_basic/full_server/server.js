import express from 'express';
import mapRoute from './routes/index';

const app = express();

mapRoute(app);

app.listen(1245, () => {
  console.log('Server listening on 1245');
});

export default app;
module.exports = app;
