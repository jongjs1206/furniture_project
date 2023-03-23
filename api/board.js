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
            id,
            title,
            b.name user,
           DATE_FORMAT(createDate,'%Y-%m-%d') createDate
            from board a
            inner join user b
            on a.user = b.user_id
            where enable=1`;
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.get('/listDetail', (req, res) => {
  console.log('call /api/board/listDetail')
  const sql = `select
            id,
            title,
            user,
           DATE_FORMAT(createDate,'%Y-%m-%d') createDate,
           contents
            from board where id = ` + req.query.ID;
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.use(express.json());
app.post('/deleteBoard', (req, res) => {
  console.log('call /api/board/deleteBoard');

  const sql = `update board set
           enable = 0 where id = ` + req.body.ID;
  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

app.post('/uploadContent', (req, res) => {
  console.log('call /api/board/uploadContent');

  const sql = `insert into board(id,title,contents,user,createDate,count,enable)
    values(
        (select max(id)+1 from board a),
       '${req.body.subject}',
       '${req.body.context}',
       'jjs',
        sysdate(),
        0,
        1
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
            contents =`  +`'`+ req.body.context + `'
    where id=`+ req.body.contentId
  ;

  con.query(sql, (e, result, fields) => {
    if(e) throw e
    res.send(result)
  })
})

module.exports = app
