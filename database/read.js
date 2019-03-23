const Event = require('../models/event')

Event.find()
    .then(documents => console.log('\nfind 所有的文档:\n',documents))

Event.find({ title:'Node.js 开发者大会'})
    .then(documents => console.log('\nfind 指定标题的文档:\n', documents))

Event.findOne({ title: 'Node.js 开发者大会' })
    .then(document => console.log('\nfindOne 指定标题的文档:\n', document))

Event.findOne({ _id: '5c95ef3166864f53eccdfa30' })
    .then(document => console.log('\nfindOne 指定_id的文档:\n', document))

Event.findById({ _id: '5c95ef3166864f53eccdfa30' })
    .then(document => console.log('\nfindById:\n', document))