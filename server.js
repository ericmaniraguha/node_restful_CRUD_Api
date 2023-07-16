
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


// //route for saving data into the rdbsm
// app.post('/product', async(req, res) =>{
//    try{

//     //as we want to save data into the rdbsm we use await
//     const product = await Product.create(req.body)
//     res.status(200).json(product)

//    }catch(error){
//     console.log(error.message);
//     res.status(500).json({message:error.message})
//    }
// })

//To modify the route for saving data into the database to handle multiple JSON products and store them in an array.
app.post('/product', async (req, res) => {
    try {
       const products = req.body; // Assuming the request body contains an array of products
       
       // Use the map() function to iterate through each product in the array
       const savedProducts = await Promise.all(products.map(async (product) => {
          const savedProduct = await Product.create(product); // Save each product in the database
          return savedProduct;
       }));
 
       res.status(200).json(savedProducts); // Return the saved products as a response
 
    } catch (error) {
       console.log(error.message);
       res.status(500).json({ message: error.message });
    }
 });
 


 // Route for fetching all products
app.get('/products', async (req, res) => {
    try {
      const products = await Product.find(); // Fetch all products from the database
      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
// Route for fetching a single product by ID
app.get('/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id); // Fetch product by ID from the database
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  // Route for updating a product by ID
app.put('/products/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update product by ID in the database
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  // Route for deleting a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id); // Delete product by ID from the database
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  

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