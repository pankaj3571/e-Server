const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const port =2700;
const bodyParser=require('body-parser')
mongoose.connect('mongodb+srv://paul0007:paul3571@hoteldb-5tutt.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useCreateIndex: true,}).then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log('error',err)
});

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port,(err)=>{
    if(!err){
        console.log('server connected to port no'+port);
    }else{
        console.log('something went wrong')
    }
})
