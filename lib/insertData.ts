import connectToDatabase from './db';

const experienceData = [
    {
        _id: '01',
        jobTitle: 'Software Engineer II',
        companyName: 'Principal Financial Group',
        companyImage: '/icons/github_icon.svg',
        companyBullets: [
            `As one of two key contributors, successfully completed a high-priority, company-wide modernization project by migrating over 25 applications from Bitbucket/Bamboo to GitHub Actions, meeting critical deadlines.`,
            `Single-handedly drove a pivotal business initiative by migrating 5 applications from Universal Analytics to Google Analytics 4, enhancing insight depth and data quality.`,
            `Successfully migrated a key application, used by thousands of customers for accessing beneficiary claims forms, from Jenkins to GitHub Actions, significantly enhancing deployment efficiency and reliability without compromising user access.`,
            `Contributed to a major modernization effort by rebuilding an outdated application with Next.js in AWS, transforming it into a more efficient and scalable Lambda application.`,
            `Established AWS SNS topics to publish critical alerts and integrated with SQS queues, leveraging xMatters for automated notification to on-call engineers. Ensured alarms were correctly configured by thoroughly testing and selecting effective data points.`,
        ],
        dateStarted: '2023-03-15',
        dateEnded: '',
        isCurrentlyWorkingHere: true,
        technologies: [
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
        ],
    },
    {
        _id: '02',
        jobTitle: 'Software Engineer',
        companyName: 'Turnberry Solutions',
        companyImage: '/icons/github_icon.svg',
        companyBullets: [
            `Developed a feature for an internal tool enabling engineers to update status messages and display
        banners on our application during issues, bypassing the need for direct production database access.`,
            `Collaborated as one of two engineers to migrate a vital internal tool, used to resolve beneficiary errors for thousands of customers, to Next.js and AWS, contributing to a significant company-wide modernization effort.`,
            `Contributed to the team's adoption of an internal component design system by transitioning unit tests to Jest, aligning testing practices with modern standards and compatibility with the design system.`,
            `Implemented multiple technical solutions for customer facing products and internal tools using React, Redux, Javascript, Node.js, Typescript, Github Actions, Terraform, AWS, GCP, Github Actions.`,
            `Updated unit test files that were lacking or non-existent to 100% coverage using Mocha, React Testing Library, Sinon, Chai, Jest, and Enzyme.`,
            `Utilized pair programming and mobbing sessions to collaborate and learn from other engineers on the team.`,
        ],
        dateStarted: '2021-11-15',
        dateEnded: '2023-03-20',
        isCurrentlyWorkingHere: false,
        technologies: [
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
        ],
    },
];

const pageInfoData = [
    {
        _id: '01',
        name: 'Gabin',
        role: 'Software Engineer II',
        heroImage: '/woods.JPG',
        backgroundInformation: `As a software engineer, I bring a combination of creativity, passion for problem-solving, and technical proficiency to my work. My continuous learning and focus on staying updated with latest technologies, enables me to deliver effective solutions. Besides coding, I enjoy outdoor activities that keep me active and connected with nature. I value building connections with like-minded individuals and am always open to making new friends over shared interests in technology and the outdoors. Let's connect and have a chat!`,
        profileImage: '/water.JPG',
        phoneNumber: 'Your Phone Number',
        email: 'Your Email',
        address: 'Your Address',
    },
];

const projectData = [
    {
        _id: '01',
        title: 'My Project',
        image: '/path/to/image.jpg',
        summary: 'This is a summary of my project.',
        technologies: [
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
            '/icons/react_icon.svg',
        ],
        linkToBuild: 'https://www.example.com',
    },
];

const skillData = [
    {
        _id: '01',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '02',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '03',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '04',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '05',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '06',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '07',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '08',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '09',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '10',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
    {
        _id: '11',
        title: 'JavaScript',
        image: '/icons/react_icon.svg',
    },
];

const socialData = [
    {
        _id: '01',
        title: 'GitHub',
        url: 'https://github.com/username',
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
                if (JSON.stringify(existingDocument) !== JSON.stringify(data)) {
                    await collection.replaceOne(query, data);
                }
            } else {
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
insertData('skills', skillData);
insertData('social', socialData);
