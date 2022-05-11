const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('App Star Wars (｡▼皿▼)')
})

app.listen(3333, () => console.log('Application is running on port 3333! 🛸'))
