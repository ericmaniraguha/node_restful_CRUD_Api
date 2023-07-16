
//  create express application or nodejs apps

const express = require("express")
const mongoose =  require("mongoose")
const app = express()

//create middleware to make our apps to understand json
app.use(express.json())

//create routes 
app.get('/',(req, res)=>{
    res.send("Hello Node API, here it is...")
})

app.get('/blog',(req, res) =>{
    res.send("Hello blog, My name is Devtamin")
})


//route for saving data into the rdbsm
app.post('/product',(req, res) =>{
    console.log(req.body);
    res.send(req.body)
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