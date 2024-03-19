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
            .collection('skills');
        const getSkills = await collection.find({}).toArray();

        res.status(200).json(getSkills);
    } catch (error) {
        res.status(500).json({
            error: 'Error connecting to database for getSkills',
        });
    } finally {
        await client.close();
    }
}
