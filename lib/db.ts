const { MongoClient, ServerApiVersion } = require('mongodb');

const url = process.env.MONGODB_URI;

const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
async function connectToDatabase(collectionName: string) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db(process.env.MONGODB_DATABASE).command({ ping: 1 });
        console.log(
            `Pinged ${collectionName} collection. You successfully connected to MongoDB!`
        );
        return client;
    } catch (error) {
        console.error(error);
    }
}

export default connectToDatabase;
