const mongoose = require('mongoose');
const app = require('../app');
mongoose.set('strictQuery', true);
require('dotenv').config();

const { DB_HOST } = process.env;

const port = process.env.PORT || 3030;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('API running on port:', port);

    app.listen(port || 3000); // Render the starting page

    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
