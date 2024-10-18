import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'
const app = express()

app.listen(3001, () => {
  console.log('listeninig at 3001')

  db.connection.once('open', () => {
    console.log('db connected successfully!')
  })
})

app.use(express.json()); //Backend ko bata rahe hain ke frontend ka data json format me aega

app.use('/', router)

//Mongodb Steps:
//1. Connect Mongodb with Nodejs
//2. Create Schemas
//3. DB se Baat Cheet karwana!