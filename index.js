const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'tracker')))
  .get('/', (req, res) => res.render('tracker/index_v05'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))