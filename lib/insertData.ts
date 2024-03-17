import connectToDatabase from './db';

const experienceData = [
    {
        _id: '01',
        jobTitle: 'Software Engineer',
        companyName: 'Turnberry Solutions',
        companyImage: 'public/icons/github_icon.svg',
        companyBullets: [
            `Developed a feature for an internal tool enabling engineers to update status messages and display
        banners on our application during issues, bypassing the need for direct production database access.`,
            `Collaborated as one of two engineers to migrate a vital internal tool, used to resolve beneficiary errors for thousands of customers, to Next.js and AWS, contributing to a significant company-wide modernization effort.`,
            `Contributed to the team's adoption of an internal component design system by transitioning unit tests to Jest, aligning testing practices with modern standards and compatibility with the design system.`,
            `Implemented multiple technical solutions for customer facing products and internal tools using React, Redux, Javascript, Node.js, Typescript, Github Actions, Terraform, AWS, GCP, Github Actions.`,
            `Updated unit test files that were lacking or non-existent to 100% coverage using Mocha, React Testing Library, Sinon, Chai, Jest, and Enzyme.`,
            `Utilized pair programming and mobbing sessions to collaborate and learn from other engineers on the team.`,
        ],
        dateStarted: new Date('2021-11-15'),
        dateEnded: new Date('2023-03-20'),
        isCurrentlyWorkingHere: false,
        technologies: ['public/icons/github_icon.svg', 'tech2'],
    },
];

const pageInfoData = [
    {
        _id: '01',
        name: 'Gabin Williams',
        role: 'Software Engineer II',
        heroImage: '',
        backgroundInformation: `As a software engineer, I bring a combination of creativity, passion for problem-solving, and technical proficiency to my work. My continuous learning and focus on staying updated with latest technologies, enables me to deliver effective solutions. Besides coding, I enjoy outdoor activities that keep me active and connected with nature. I value building connections with like-minded individuals and am always open to making new friends over shared interests in technology and the outdoors. Let's connect and have a chat!`,
        profileImage: '',
        phoneNumber: 'Your Phone Number',
        email: 'Your Email',
        address: 'Your Address',
    },
];

const projectData = [
    {
        _id: '01',
        title: 'My Project',
        image: 'url to photo',
        summary: 'This is a summary of my project.',
        technologies: ['tech1', 'tech2', 'tech3'],
        linkToBuild: 'https://www.example.com', // replace with your actual URL
    },
];

const skillData = [
    {
        title: 'JavaScript',
        image: 'path to image',
    },
];

async function insertData(collectionName: string, dataArray: any[]) {
    try {
        const client = (await connectToDatabase(collectionName)) as any;
        const db = client.db(process.env.MONGODB_DATABASE);

        const collection = db.collection(collectionName);

        for (const data of dataArray) {
            const query = {
                _id: data._id,
            };

            const existingDocument = await collection.findOne(query);

            if (existingDocument) {
                // Check if the existing document is different from the new data
                if (JSON.stringify(existingDocument) !== JSON.stringify(data)) {
                    // If it's different, replace the entire document
                    await collection.replaceOne(query, data);
                }
            } else {
                // If the document doesn't exist, insert a new one
                await collection.insertOne(data);
            }
        }
    } catch (error) {
        console.error(`Error inserting data into ${collectionName}:`, error);
    }
}

insertData('experience', experienceData);
insertData('pageInfo', pageInfoData);
insertData('projects', projectData);
