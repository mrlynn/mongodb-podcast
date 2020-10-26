require('dotenv').config();
const { MongoClient } = require("mongodb");
const shows = require('../cache/data');

const client = new MongoClient(process.env.MONGODB_URI);

async function run() {
  try {
    await client.connect();

    const database = client.db(process.env.MONGODB_DB);
    const collection = database.collection("shows");

    shows.forEach(async show => {
      const result = await collection.updateOne(
        {id: show.id}, 
        {$set: {
          id: show.id, 
          title: show.title,
          excerpt: show.excerpt
        }}, 
        {upsert:true});
        
      console.log(result);

    })

  } finally {
    console.log('Done!');
    await client.close();
  }
}
run().catch(console.dir);
