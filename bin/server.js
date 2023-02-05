const mongoose = require('mongoose');
const app = require('../app');
mongoose.set('strictQuery', true);
require('dotenv').config();

const { DB_HOST } = process.env;

const port = process.env.PORT || 3030;

const connect = () => {
  mongoose
    .connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connection successful');
      app.listen(port || 3030);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

app.listen(() => {
  connect();
  console.log('API running on port:', port);
});
