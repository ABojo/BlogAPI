require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database!');
  });

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is listening for incoming requests!');
});
