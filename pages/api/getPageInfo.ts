import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const url = process.env.MONGODB_URI || '';
    const client = new MongoClient(url);

    try {
        await client.connect();
        const collection = client
            .db(process.env.MONGODB_DATABASE || '')
            .collection('pageInfo');
        const getPageInfo = await collection.find({}).toArray();

        res.status(200).json(getPageInfo);
    } catch (error) {
        res.status(500).json({
            error: 'Error connecting to database for getPageInfo',
        });
    } finally {
        await client.close();
    }
}
