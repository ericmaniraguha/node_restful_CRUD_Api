
//  create express application or nodejs apps

const express = require("express")
const mongoose =  require("mongoose")
const Product = require('./models/productModel')
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
app.post('/product', async(req, res) =>{
   try{

    //as we want to save data into the rdbsm we use await
    const product = await Product.create(req.body)
    res.status(200).json(product)

   }catch(error){
    console.log(error.message);
    res.status(500).json({message:error.message})
   }
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