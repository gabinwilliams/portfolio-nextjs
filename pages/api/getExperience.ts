import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";

const query = groq`
    *[_type == "experience"] {
        // give me all experiences and expand Technologies type out
        ...,
        Technologies[]->
    }
`;

type Data = { experience: Experience[] };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experience: Experience[] = await sanityClient.fetch(query);

    res.status(200).json({ experience });
}
