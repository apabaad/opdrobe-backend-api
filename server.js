import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

//connect the mongodb
import mongoClient from './src/config/db.js';
mongoClient();

//load routers
import itemRouter from './src/routers/itemRouter.js';

app.use('/api/v1/item', itemRouter);

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
