const express=require('express');
const mongoose=require('mongoose');
const body_parser=require('body-parser');
const cookie=require('cookie-parser')
const cors=require('cors')

const port=3200;
const app=express();

app.use(cors())
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(cookie());


const webroute=require('./routes/APIRoute');
app.use(webroute);




const database="mongodb+srv://nodeClass:LMoQihMaJfCIw0pQ@cluster0.vimfle7.mongodb.net/http_project_nodeAPI";
mongoose.connect(database,({useNewUrlParser:true,useUnifiedTopology:true}))
.then(result=>{
app.listen(port,()=>{
    console.log("DataBase connected.....");
    console.log(`server running http://localhost:${port}`);
})
}).catch(err=>{
    console.log(err);
})