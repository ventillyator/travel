import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


import * as UserController from './controllers/UserController.js'
import * as TravelControllers from './controllers/TravelControllers.js'
const app = express()

app.use(express.json())
app.use(cors())


mongoose 
.connect('mongodb+srv://admin:wwwwww@cluster0.weppimj.mongodb.net/travel?retryWrites=true&w=majority&appName=Cluster0' ) 
 .then(()=> console.log('DB okey')) 
 .catch((err)=> console.log('db error' , err))


app.post('/register' , UserController.register)
app.post('/login' , UserController.login)
app.post('/addTravel' , TravelControllers.addTravel)
app.get('/travels' , TravelControllers.travels)



app.listen(4444 , ()=>{
    console.log('server started ');
})