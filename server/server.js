import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json())

const DATA_FILE = path.join(
  process.cwd(),
  'server',
  'data',
  'customData.json'
)

app.get('/api/customData', (req, res) => {

  if (!fs.existsSync(DATA_FILE)) {
    return res.json({})
  }

  const data = JSON.parse(
    fs.readFileSync(DATA_FILE, 'utf8')
  )

  res.json(data)

})

app.post('/api/customData', (req, res) => {

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(req.body, null, 2)
  )

  res.json({
    success: true
  })

})

const PORT = 3001

app.listen(PORT, () => {

  console.log(`Server kör på http://localhost:${PORT}`)

})