const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  task: {
    type: String,
    require: [true, 'Task required']
  },
  completeStat: {
    type: String,
    default: 'uncomplete'
  },
}, {
  timestamps: true
})

let todo = mongoose.model('todo', todoSchema)

module.exports = todo
