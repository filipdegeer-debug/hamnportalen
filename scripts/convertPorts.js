import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function convertLatitude(value) {
  const degrees = Number(value.slice(0, 2))
  const minutes = Number(value.slice(2, 4))
  const seconds = Number(value.slice(4, 6))
  const direction = value.slice(6)

  let decimal = degrees + minutes / 60 + seconds / 3600

  if (direction === 'S') decimal *= -1

  return Number(decimal.toFixed(6))
}

function convertLongitude(value) {
  const degrees = Number(value.slice(0, 3))
  const minutes = Number(value.slice(3, 5))
  const seconds = Number(value.slice(5, 7))
  const direction = value.slice(7)

  let decimal = degrees + minutes / 60 + seconds / 3600

  if (direction === 'W') decimal *= -1

  return Number(decimal.toFixed(6))
}

const files = fs
  .readdirSync(__dirname)
  .filter(file => file.toLowerCase().endsWith('.csv'))

if (files.length === 0) {
  console.log('❌ Ingen CSV-fil hittades.')
  process.exit(1)
}

const csvFile = path.join(__dirname, files[0])

const ports = []

fs.createReadStream(csvFile)
  .pipe(csv())
  .on('data', row => {

    ports.push({

      id: row['IMO Port Facility Number'],

      hamnNamn: row['Port Name'],

      hamnanlaggningNamn: row['Facility Name'],

      operatör: '',

      ncmKund: false,

      gisis: row['IMO Port Facility Number'],

      gatuadress: '',

      latitud: convertLatitude(row['Latitude']),

      longitud: convertLongitude(row['Longitude']),

      skyddsniva: 1,

      pfso: '',
      pfsoTelefon: '',
      pfsoEmail: '',

      pfspInskickad: '',
      pfspGodkandTill: '',

      dokument: [],

      anteckningar: ''

    })

  })
  .on('end', () => {

    const strangePorts = ports.filter(port =>
      port.latitud < 55 ||
      port.latitud > 70 ||
      port.longitud < 9 ||
      port.longitud > 25
    )

    console.log('')
    console.log('===============================')
    console.log('MISSTÄNKTA KOORDINATER')
    console.log('===============================')

    console.table(strangePorts)

    const output = `// ----------------------------------------------------
// AUTO GENERATED
// Genererad från GISIS.
// Redigera INTE denna fil.
// Kör istället:
//
// node scripts/convertPorts.js
// ----------------------------------------------------

export const ports = ${JSON.stringify(ports, null, 2)}
`

    const outputPath = path.join(
      __dirname,
      '..',
      'src',
      'data',
      'ports.generated.js'
    )

    fs.writeFileSync(outputPath, output)

    console.log('')
    console.log('✅ Klart!')
    console.log(`${ports.length} hamnanläggningar importerade.`)
    console.log(`Misstänkta koordinater: ${strangePorts.length}`)
    console.log('')
    console.log(outputPath)

  })