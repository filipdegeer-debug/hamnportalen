import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hej')
})

app.listen(3001, () => {
  console.log('Server startad')
})

setInterval(() => {
  console.log('tick')
}, 3000)