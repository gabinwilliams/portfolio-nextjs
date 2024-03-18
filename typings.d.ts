interface Body {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

// interface Image {
//     url: any;
//     _type: 'image';
//     asset: {
//         _ref: string;
//         _type: 'reference';
//     };
// }

export interface PageInfo extends Body {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profileImage: Image;
}

export interface Technology extends Body {
    _type: 'skill';
    image: Image;
    title: string;
}

export interface Skill extends Body {
    _type: 'skill';
    image: Image;
    title: string;
}

export interface Experience extends Body {
    _type: 'experience';
    companyBullets: string[];
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    companyName: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends Body {
    _type: 'project';
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends Body {
    _type: 'social';
    title: string;
    url: string;
}
