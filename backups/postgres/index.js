// Error: pg_dump: error: query failed: ERROR:  permission denied for table identities
// run: ALTER ROLE postgres SUPERUSER

const { execute } = require('@getvim/execute')
const compress = require('gzipme')
const fs = require('fs')
const cron = require('node-cron')

const dotenv = require('dotenv')
dotenv.config()

const user = process.env.DB_USER
const name = process.env.DB_NAME
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const pass = process.env.DB_PASS

const s3_bucket = process.env.S3_BUCKET

var currentDate, backupFile, backupFileGz

// https://codingsight.com/upload-files-to-aws-s3-with-the-aws-cli/
const s3Upload = () => {
  execute(`aws s3 cp ${backupFileGz} s3://${s3_bucket}/`)
    .then(async () => {
      fs.unlinkSync(backupFileGz)
      console.log(`Backup uploaded to S3 successfully`)
    })
    .catch(err => {
      console.log(err)
    })
}

// https://soshace.com/automated-postgresql-backups-with-nodejs-and-bash/
const backup = () => {
  const date = new Date()
  currentDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.${date.getHours()}.${date.getMinutes()}`
  backupFile = `pg-backup-${currentDate}.tar`
  backupFileGz = `${backupFile}.gz`

  execute(`pg_dump 'postgres://${user}:${pass}@${host}:${port}/${name}' -f ${backupFile}`)
    .then(async () => {
      await compress(backupFile)
      fs.unlinkSync(backupFile)
      console.log(`Backup created successfully`)
      s3Upload()
    })
    .catch(err => {
      console.log(err)
    })
}

// https://crontab.guru/
// * * * * * Every Minute
// 0 * * * * Every Hour
// 0 0 * * * Every Day
const startSchedule = () => {
  cron.schedule(
    '0 0 * * *',
    () => {
      backup()
    },
    {}
  )
}

startSchedule()
