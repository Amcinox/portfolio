import emoji from "react-easy-emoji";

export const greetings = {
  name: "Simo Elbssir",
  title: "Hi all, I'm Simo",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Vuejs/ Nodejs / PHP / and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.",
};

export const openSource = {
  githubUserName: "amcinox",
};

export const contact = {};

export const socialLinks = {
  url: "https://www.elbssir.com",
  linkedin: "https://www.linkedin.com/in/amcinox/",
  github: "https://github.com/amcinox",
  instagram: "https://www.instagram.com/volracom",
  facebook: "https://www.facebook.com/elbssir",
  twitter: "https://twitter.com/amcinox",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building cross platform apps in React Native & Cordova"),
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in NodeJS & ExpressJS Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon-round",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },

        {
          skillName: "PHP",
          fontAwesomeClassname: "vscode-icons:file-type-php",
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "vscode-icons:file-type-swift",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Vuejs",
          fontAwesomeClassname: "vscode-icons:file-type-vue",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Quasar",
          fontAwesomeClassname: "vscode-icons:file-type-light-quasar",
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "vscode-icons:file-type-expo",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "vscode-icons:file-type-npm",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "vscode-icons:file-type-firebase",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "vscode-icons:file-type-gitlab",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "App Center",
          fontAwesomeClassname: "logos:appcenter-icon",
        },
        // Database

        {
          skillName: "Mysql",
          fontAwesomeClassname: "vscode-icons:file-type-mysql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:folder-type-mongodb",
        },
        {
          skillName: "Neo4J",
          fontAwesomeClassname: "logos:neo4j",
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "logos:aws-dynamodb",
        },
      ],
    },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

// export const educationInfo = [
//   {
//     schoolName: "Harvard University",
//     subHeader: "Master of Science in Computer Science",
//     duration: "September 2017 - April 2019",
//     desc: "Participated in the research of XXX and published 3 papers.",
//     grade: "Grade A",
//     descBullets: [
//       "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     ],
//   },
// ];
const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
});

export const experience = [
  {
    role: "Frontend Developer",
    company: "Egaliti",
    companylogo: "/img/icons/common/egaliti.jpg",
    date: `Apr 2022 – ${today}`,
    desc: "I worked as frontend web developer to build cross-platform Mobile application using React Native and design web based admin dashboards using ReactJs, Mui and some other libraries.",
  },
  {
    role: "Frontend Developer",
    company: "MatchEdge",
    companylogo: "/img/icons/common/match-edge.png",
    date: `Oct 2022 – ${today}`,
    desc: "I worked as frontend web developer to design web app using Quasar , Vuejs  and some other libraries.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Frontend Developer",
    company: "Porthos",
    companylogo: "/img/icons/common/porthos.png",
    date: `Nov 2021 - ${today}`,
    desc: "I worked as frontend web developer to design Dashboard and web app using Quasar , Vuejs  and some other libraries.",
  },
  {
    role: "Full Stack Developer",
    company: "ReMirage",
    companylogo: "/img/icons/common/wapidu.jpg",
    date: "Oct 2022",
    desc: "Worked as a React Native Developer to design and build cross-platform mobile app for AI social media and Created REST APIs using express and Deployed it on AWS based Docker container registry.",
  },
];

export const projects = [
  {
    name: "react-native-typescript-template",
    desc: "React Native Template with navigation ,Tab navigation ,Drawer navigation ,Redux ! using TypeScript",
    github: "https://github.com/Amcinox/react-native-typescript-template",
  },
];

export const feedbacks = [
  {
    name: "Tony Leigh",
    feedback: "...",
  },
  {
    name: "Mark Alcock",
    feedback: "...",
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Simo Elbssir",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Simo Elbssir",
  image: "https://avatars.githubusercontent.com/u/19363749?v=4",
  url: "https://www.elbssir.com",
  keywords: [
    "elbssir",
    "simo elbssir",
    "@elbssir",
    "@amcinox",
    "amcinox",
    "Portfolio",
    "Elbssir Portfolio ",
    "Simo Elbssir Portfolio",
  ],
};
