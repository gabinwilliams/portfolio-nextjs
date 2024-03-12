const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_CONNECT_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
async function connectToDatabase() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db(process.env.MONGODB_DATABASE).command({ ping: 1 });
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        );
        return client;
    } catch (error) {
        console.error(error);
    }
}

export default connectToDatabase;
