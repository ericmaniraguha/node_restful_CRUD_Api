
//  create express application or nodejs apps

const express = require("express")
const mongoose =  require("mongoose")
const app = express()

//create routes 
app.get('/',(req, res)=>{
    res.send("Hello Node API, here it is...")
})

app.get('/blog',(req, res) =>{
    res.send("Hello blog, My name is Devtamin")
})


mongoose.set("strictQuery",false )
mongoose.
connect('mongodb+srv://admin:root@restfulcrudapi2023.ssjrzth.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>{
    app.listen(3000,()=>{
        console.log("Node API app is running on port 3000");
    })
    console.log("Connected to mongoDB.");
}).catch((error) =>{
    console.log(error);
})