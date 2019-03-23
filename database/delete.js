const Event = require('../models/event')

Event.findByIdAndRemove('5c95ef3166864f53eccdfa32')
  .then(document => console.log(document))