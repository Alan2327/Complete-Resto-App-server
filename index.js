// const express = require('express')
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 6001;
// require('dotenv').config()
// console.log(process.env)

// //middleware 
// app.use(cors());
// app.use(express.json());

// //mongobd config
// const { MongoClient, ServerApiVersion,ObjectId} = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodi-cluster.i1gmy.mongodb.net/foodi-client?retryWrites=true&w=majority&appName=foodi-cluster`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
    
//  await client.connect();
// // db & collection

// const menuCollections = client.db("foodi-client").collection("menus");
// const cartCollections = client.db("foodi-client").collection("cartItems");

// // all menu items operations
// app.get('/menu',async(req,res)=>{
//   const result = await menuCollections.find().toArray();
//   res.send(result);
// })



// //posting cart to db
// app.post('/carts',async(req,res)=>{
//   const cartItems=req.body;
//   const result=await cartCollections.insertOne(cartItems);
//   res.send(result);
// })

// //get carts using email 
// app.get('/carts',async(req,res)=>{
//   const email=req.query.email;
//   const filter ={email:email};
//   const result=await cartCollections.find(filter).toArray();
//   res.send(result)
// })


// //get specific carts
// app.get('/carts/:id',async(req,res)=>{
//   const id = req.params.id;
//   const filter ={_id: new ObjectId(id)};
//   const result=await cartCollections.findOne(filter);
//   res.send(result);
// })

// //delete items from cart
// app.delete('/carts/:id',async(req,res)=>{
//    const id = req.params.id;
//    const filter ={_id: new ObjectId(id)};
//    const result =await cartCollections.deleteOne(filter);
//    res.send(result);
// });

// // Update cart quantity
// app.put('/carts/:id', async (req, res) => {
//   const id = req.params.id;
//   const { quantity } = req.body; // Extract quantity from req.body

//   if (!quantity) {
//     return res.status(400).send({ message: "Quantity is required" });
//   }

//   const filter = { _id: new ObjectId(id) };
//   const options = { upsert: true };
//   const updateDoc = {
//     $set: {
//       quantity: parseInt(quantity, 10), // Ensure quantity is an integer
//     },
//   };

//   const result = await cartCollections.updateOne(filter, updateDoc, options);
//   res.send(result);
// });


//   await client.db("admin").command({ ping: 1 });
//   console.log("You successfully connected to MongoDB!");
// } finally {
  
//   // await client.close();
// }
// }
// run().catch(console.dir);




// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`)
// })

//username: alanumnr
//password: alanumnr_23
  




