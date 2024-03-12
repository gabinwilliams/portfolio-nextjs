import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const uri = process.env.MONGODB_CONNECT_URI || '';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection = client.db('portfolio').collection('experience');
        const experience = await collection.find({}).toArray();

        res.status(200).json({ experience });
    } catch (error) {
        res.status(500).json({ error: 'Error connecting to database' });
    } finally {
        await client.close();
    }
}
