const { execute } = require('@getvim/execute')
const compress = require('gzipme')
const fs = require('fs')

const dotenv = require('dotenv')
dotenv.config()

const user = process.env.DB_USER
const name = process.env.DB_NAME
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const pass = process.env.DB_PASS

const date = new Date()
const currentDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.${date.getHours()}.${date.getMinutes()}`
const backupFile = `pg-backup-${currentDate}.tar`

const backup = () => {
  execute(`pg_dump 'postgres://${user}:${pass}@${host}:${port}/${name}' -f ${backupFile}`)
    .then(async () => {
      await compress(backupFile)
      fs.unlinkSync(backupFile)
      console.log(`Backup created successfully`)
      return 0
    })
    .catch(err => {
      console.log(err)
      return 1
    })
}

module.exports = backup
