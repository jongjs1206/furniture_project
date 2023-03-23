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
  console.log('call /api/board')
  const sql = 'select * from user'
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.get('/list', (req, res) => {
  console.log('call /api/board/list')
  const sql = `select
            @rownum := @rownum + 1 AS no,
            id,
            name,
            title,
            date_format(date_time,'%Y/%m/%d %h:%m:%s') AS date_time
            from board,
             (SELECT @rownum :=0) AS r
            order by date_time desc`;
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.get('/listDetail', (req, res) => {
  console.log('call /api/board/listDetail')
  const sql = `select
          id,
          name,
          title,
           date_format(date_time,'%Y/%m/%d %h:%m:%s') createDate,
           context
            from board where id = ` + req.query.ID;
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.use(express.json());
app.post('/deleteBoard', (req, res) => {
  console.log('call /api/board/deleteBoard');

  const sql = `delete from board where id = ` + req.body.ID;
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.post('/uploadContent', (req, res) => {
  console.log('call /api/board/uploadContent');

  const sql = `insert into board(id,title,context,name,date_time)
    values(
        (select max(id)+1 from board a),
       '${req.body.subject}',
       '${req.body.context}',
       'jjs',
        date_format(sysdate(),'%Y%m%d%h%m%s')
    )
  `;

  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.post('/updateContent', (req, res) => {
  console.log('call /api/board/updateContent');

  const sql = `update board set
            title =`  +`'`+ req.body.subject + `',
            context =`  +`'`+ req.body.context + `'
    where id=`+ req.body.contentId
  ;

  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

module.exports = app
