const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./MessageRoutes');

app.use(bodyParser.urlencoded({extended: true}))

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_LINK)

app.use(routes)

app.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})