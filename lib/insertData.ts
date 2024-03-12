import connectToDatabase from './db';

const experienceData = {
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
};

async function insertData() {
    try {
        const client = (await connectToDatabase()) as any;
        const db = client.db(process.env.MONGODB_DATABASE);
        const collection = db.collection('experience');

        // Use the jobTitle and companyName as a unique identifier for each experience
        const query = {
            jobTitle: experienceData.jobTitle,
            companyName: experienceData.companyName,
        };

        const options = { upsert: true };

        await collection.updateOne(query, { $set: experienceData }, options);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

insertData().catch(console.error);
