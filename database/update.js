const Event = require('../models/event')

let id = '5c95ef3166864f53eccdfa32'
let body = {
  title:'Google I/O 开发者大会'
}

Event.findByIdAndUpdate(id,{ $set: body},{new:true})
  .then(document => console.log(document))