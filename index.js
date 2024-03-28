const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('HI')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://jeffyeokj:123456abc@fkekkdb.cupg5id.mongodb.net/?retryWrites=true&w=majority&appName=FkekkDB";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB")
    // await IMPORTANT!!
    // insertOne({})
    // find().toArray()
    // updateOne({_id, update})
    let result = await client.db("sample_mflix").collection("students").find().toArray()
    // Indicator for inserting data into database
    console.log(result)
    
    // Send a ping to confirm a successful connection
    } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
