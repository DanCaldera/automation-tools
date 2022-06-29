const { execute } = require('@getvim/execute')
const fs = require('fs')
const gunzip = require('gunzip-file')

const dotenv = require('dotenv')
dotenv.config()

const user = process.env.DB_USER
const name = process.env.DB_NAME
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const pass = process.env.DB_PASS

const args = process.argv.slice(2)

function restore() {
  const compressedBackupFile = args[0]
  if (!compressedBackupFile) {
    console.log('No backup file provided')
    return 1
  }
  const tempBackupUncompressedFile = compressedBackupFile.replace('.gz', '')
  gunzip(compressedBackupFile, tempBackupUncompressedFile, () => {
    execute(`psql 'postgres://${user}:${pass}@${host}:${port}/${name}' < ${tempBackupUncompressedFile}`)
      .then(async () => {
        fs.unlinkSync(tempBackupUncompressedFile)
        console.log('Restored')
      })
      .catch(err => {
        console.log(err)
      })
  })
}

restore()
