import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import cards from './dbCards.js';

const port = process.env.PORT || 9000;
const app = express();
app.use(express.json())


const connection_Url = "mongodb+srv://new:44gUrpreet@cluster0.iewqwun.mongodb.net/?retryWrites=true&w=majority";

app.use((req, res, next)=>{
     res.setHeader('Access-Control-Allow-Origin', '*'),
     res.setHeader('Access-Control-Allow-Headers', '*'),
     next()
 })

mongoose.connect(connection_Url);

app.get('/',(req,res)=>res.status(200).send('hello'))

app.get('/v1/card',(req,res)=>res.status(200).send(data))

app.get('/v2/card',(req,res)=>{ 
    cards.find({}, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        } 
    })
})


app.post('/v2/card',(req,res)=>{
    const dbCards = req.body;

    cards.create(dbCards,(err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})


app.listen(port,()=>console.log(`listening on localhost:${port}`))


