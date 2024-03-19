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
            .collection('socials');
        const getSocials = await collection.find({}).toArray();

        res.status(200).json(getSocials);
    } catch (error) {
        res.status(500).json({
            error: 'Error connecting to database for getSocials',
        });
    } finally {
        await client.close();
    }
}
