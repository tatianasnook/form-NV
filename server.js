const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}))

mongoose.set("strictQuery", false)
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
  let newMessage = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  })
  newMessage.save()
  res.sendFile(__dirname + '/answer.html')
})

app.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})