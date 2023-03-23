import express from 'express'

const app = express()
const mysql = require('mysql')
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin1234',
  database: 'nuxt_db'
})

con.connect((err) => {
  if (err) throw err
  console.log('Mysql Connected')
})

app.get('/', (req, res) => {
  console.log('call /api/test')
  const sql = 'select * from user'
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

module.exports = app
