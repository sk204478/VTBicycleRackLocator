const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Connected to database');
    
    const racks_collection = client.db('RackLocator').collection('bicycle_racks');
    const buildings_collection = client.db('RackLocator').collection('buildings');

    app.get('/racks', async (req, res) => {
      const racks = await racks_collection.find({}).toArray();
      res.json(racks);
    });

    app.get('/buildings', async (req, res) => {
        const buildings = await buildings_collection.find({}).toArray();
        res.json(buildings);
    })

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
      

  } catch (e) {
    console.error(e);
  }
}

main();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
