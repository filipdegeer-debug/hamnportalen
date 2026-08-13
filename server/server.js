import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { ports } from '../src/data/ports.generated.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

const DATA_FILE = path.join(
  __dirname,
  'data',
  'customData.json'
)

console.log('================================')
console.log('SERVER STARTAR')
console.log('Antal hamnar:', ports.length)
console.log('================================')

function loadCustomData() {

  if (!fs.existsSync(DATA_FILE)) {
    return {}
  }

  try {
    return JSON.parse(
      fs.readFileSync(DATA_FILE, 'utf8')
    )
  } catch (err) {

    console.error('Fel vid läsning av customData.json')

    return {}

  }

}

function saveCustomData(data) {

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(data, null, 2),
    'utf8'
  )

}

// ===============================
// API fungerar
// ===============================

app.get('/', (req, res) => {

  res.send('API fungerar')

})

// ===============================
// Hämta customData
// ===============================

app.get('/api/customData', (req, res) => {

  console.log('GET /api/customData')

  res.json(loadCustomData())

})

// ===============================
// Spara customData
// ===============================

app.post('/api/customData', (req, res) => {

  console.log('POST /api/customData')

  saveCustomData(req.body)

  res.json({
    success: true
  })

})

// ===============================
// Hämta alla hamnar
// ===============================

app.get('/api/ports', (req, res) => {

  console.log('GET /api/ports')

  const customData = loadCustomData()

  const mergedPorts = ports.map(port => ({

    ...port,

    ...(customData[port.id] || {})

  }))

  res.json(mergedPorts)

})

// ===============================

app.listen(3001, () => {

  console.log('')
  console.log('✅ API startad på http://localhost:3001')
  console.log('')

})