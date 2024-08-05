
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React  Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Structures",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "Three JS",    
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Ecommerce Project",
        description:
            "A Full Stack website using MERN which is just a small prototype of websites like amazom.com,flipkart.com • React is used for frontend and Express JS is used for backend development • MongoDB is used for storing the data with proper encryption methods to save passwords • Redux is used for the data transfer from the backend to frontend through APIs and the proxy method is used to connect the server of frontend and backend",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Nodejs",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
            {
                name: "API",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/itz10pankaj/E-commerce-Frontend",
    },
    {
        name: "Expanse Tracker",
        description:
            "Developed an expense tracker application using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to record, categorize, and visualize their expenses. Implemented user authentication, real-time data updates, and a responsive UI for a seamless user experience. Focused on efficient data management and user-friendly design to help users track their financial activities effectively.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Nodejs",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://expense-tracker-frontend-rouge.vercel.app/",
    },
    {
        name: "GPT-3 framework Frontend",
        description:
            "The GPT Intro project, hosted on Vercel, is a frontend application designed to demonstrate the integration of OpenAI's GPT model into a user-friendly web interface.  The deployment on Vercel ensures fast, reliable, and scalable performance. Through this project, users can experience the power of AI-driven text generation in a seamless and interactive environment, showcasing the practical applications of advanced natural language processing technologies",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://gptintro.vercel.app/",
    },

];
const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

export { services, technologies, testimonials, experiences, projects };
