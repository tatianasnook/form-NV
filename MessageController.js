const Message = require('./MessageModel');

module.exports.getMessage = async (req, res) => {
  res.sendFile(__dirname + "/index.html")
}

module.exports.saveMessage = async (req, res) => {
  let newMessage = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  })
  newMessage.save()
  res.sendFile(__dirname + '/answer.html')
}
