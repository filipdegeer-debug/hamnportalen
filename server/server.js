import express from 'express'
import { ports } from '../src/data/ports.generated.js'

console.log('================================')
console.log('SERVER STARTAR')
console.log('Antal hamnar:', ports.length)
console.log('================================')

const app = express()

app.get('/', (req, res) => {
  res.send('API fungerar')
})

app.get('/api/ports', (req, res) => {

  console.log('GET /api/ports')

  res.json(ports)

})

app.listen(3001, () => {

  console.log('Express lyssnar på port 3001')

})

setInterval(() => {

  console.log('Server lever')

}, 5000)