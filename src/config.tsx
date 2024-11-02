
import { FaMobile, FaAws } from 'react-icons/fa'
import { SiNodedotjs, SiReact, SiDocker, SiVercel, SiKubernetes, SiFirebase, SiGithub, SiGitlab, SiNginx, SiLinux, SiTypescript, SiNextdotjs, SiExpo, SiTailwindcss, SiZod, SiRust, SiServerless, SiSwift, SiDeno, SiMysql, SiMongodb, SiPhp, SiExpress, SiHtml5, SiCss3, SiVuedotjs, SiMui, SiShadcnui } from 'react-icons/si'
import { ContactType, Project, Review, Technologies, TechnologyType } from './types';


export const about = {
    name: "Simo Elbssir",
    title: "Full Stack Developer",
    info: "Bridging Morocco and Japan through innovative financial solutions",
    description: "🇲🇦 Originally from Morocco, now living in the beautiful city of Nara, Japan 🇯🇵. \nI'm a Full Stack Developer with 9 years of experience, specializing in finance and banking projects. Over the years, I've honed my skills in building robust, scalable solutions that drive business success.\nMy unique background allows me to bridge cultural gaps and bring a global perspective to every project I undertake.",
    avatar: "https://avatars.githubusercontent.com/u/19363749?v=4",
};



const technologies: Technologies = {
    [TechnologyType.frontend]: [
        { name: 'React', icon: <SiReact /> },
        { name: 'React Native', icon: <FaMobile /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Expo', icon: <SiExpo /> },
        { name: 'Shadcn UI', icon: <SiShadcnui /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Vue.js', icon: <SiVuedotjs /> },
        { name: 'Material UI', icon: <SiMui /> },
    ],
    [TechnologyType.backend]: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: "Swift", icon: <SiSwift /> },
        { name: "Denno.js", icon: <SiDeno /> },
        { name: 'Rust', icon: <SiRust /> },
        { name: 'Zod', icon: <SiZod /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },

    ],
    [TechnologyType.devops]: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'Serverless', icon: <SiServerless /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'GitLab', icon: <SiGitlab /> },
        { name: 'Nginx', icon: <SiNginx /> },
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Firebase', icon: <SiFirebase /> },


    ],
}
const projects: Project[] = [
    {
        name: 'Fair Finance',
        description: 'Fair Finance delivers a customized dashboard solution that empowers various departments to analyze, visualize, and act on business data with unprecedented ease.',
        logo: '/projects/fairfinance-logo.png',
        tags: ['Next JS', 'Node.js', 'AWS', "Typescript", "MUI"],
        slug: 'fair-finance'
    },
    {
        name: 'Egaliti',
        description: 'Egaliti is an innovative e-banking platform designed to empower businesses worldwide with secure, efficient financial services.',
        logo: '/projects/egaliti-logo.png',
        tags: ['React', "Next JS", "Typescript", "Serverless", 'Node.js', 'AWS', "Express", "React Native"],
        slug: 'egaliti'
    },
    {
        name: 'Neeb',
        description: 'Neeb App is a pioneering social media platform designed exclusively for flight crews, providing a private and professional space for team communication and collaboration during travels.',
        logo: '/projects/neeb-logo.svg',
        tags: ['Expo', 'Deno.js', 'Typescript', "Next JS", "NGINX"],
        slug: 'neeb'
    },
    {
        name: 'Advancia',
        description: 'Advancia is a cutting-edge salary advance service that puts financial control in the hands of employees while providing powerful management tools for employers',
        logo: '/projects/advancia-logo.png',
        tags: ['React', 'Node.js', 'AWS', "React Native", "Typescript", "Serverless"],
        slug: 'advancia'
    },
    {
        name: 'Synchronas',
        description: 'Synchronas is an innovative e-banking platform designed to empower businesses worldwide with secure, efficient financial services.',
        logo: '/projects/synchronas-logo.png',
        tags: ['React', "Next JS", "Typescript", "Serverless", 'Node.js', 'AWS', "Express", "React Native"],
        slug: 'synchronas'
    },


]



const reviews: Review[] = [
    {
        name: "LEMMOUCHI Abdelkarim",
        role: "Director of Neeb",
        content: "«Mohamed is a developer who masters his subjects well and knows how to explain them simply. \n He always available and he is able to add his touch to the project. \n I highly recommend it. »",
        avatar: `https://neeb.app/img/icon_logo.svg`
    }

]




export const contact: Record<ContactType, string> = {
    [ContactType.url]: "https://www.elbssir.com",
    [ContactType.linkedin]: "https://www.linkedin.com/in/amcinox/",
    [ContactType.github]: "https://github.com/amcinox",
    [ContactType.instagram]: "https://www.instagram.com/volracom",
    [ContactType.facebook]: "https://www.facebook.com/elbssir",
    [ContactType.x]: "https://x.com/amcinox",
    [ContactType.youtube]: 'https://www.youtube.com/amcinox',
    [ContactType.email]: 'mailto:contact@elbssir.com'
};








const siteMetadata = {
    title: about.name,
    author: about.name,
    headerTitle: about.name,
    description: about.info,
    language: 'en-us',
    theme: 'system',
    siteUrl: contact[ContactType.url],
    siteRepo: 'https://github.com/Amcinox/portfolio',
    siteLogo: '/logo.png',
    socialBanner: '/images/sns-card.JPG',
    locale: 'en-US',
    analytics: {
        googleAnalytics: {
            googleAnalyticsId: 'G-0W63YJFLJJ',
        },
    },
}


const config = {
    about,
    technologies,
    projects,
    reviews,
    contact,
    siteMetadata
} as const

export default config;