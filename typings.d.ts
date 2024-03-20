export interface Experience {
    _id: string;
    jobTitle: string;
    companyName: string;
    companyImage: string;
    companyBullets: string[];
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    technologies: string[];
}

export interface PageInfo {
    _id: string;
    name: string;
    role: string;
    heroImage: string;
    backgroundInformation: string;
    profileImage: string;
    phoneNumber: string;
    email: string;
    address: string;
}

export interface Project {
    _id: string;
    title: string;
    image: string;
    summary: string;
    technologies: string[];
    linkToBuild: string;
}

export interface Skill {
    _id: string;
    title: string;
    image: string;
}

export interface Social {
    _id: string;
    title: string;
    url: string;
}
