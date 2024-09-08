export enum TechnologyType {
    frontend = "frontend",
    backend = "backend",
    devops = "devops",
}


export interface Technology {
    name: string;
    icon: React.ReactNode;
}
export interface Technologies {
    [TechnologyType.frontend]: Technology[];
    [TechnologyType.backend]: Technology[];
    [TechnologyType.devops]: Technology[];
}



export interface Project {
    name: string;
    description: string;
    tags: string[];
    slug: string;
    logo: string;
}

export interface Review {
    name: string;
    role: string;
    content: string;
    avatar?: string;
}


export enum ContactType {
    url = "url",
    github = "github",
    linkedin = "linkedin",
    instagram = "instagram",
    youtube = "youtube",
    facebook = "facebook",
    email = "email",
    x = "x",
}
export interface Contact {
    [ContactType.github]: string;
    [ContactType.linkedin]: string;
    [ContactType.instagram]: string;
    [ContactType.youtube]: string;
    [ContactType.facebook]: string;
    [ContactType.email]: string;
    [ContactType.x]: string;
}