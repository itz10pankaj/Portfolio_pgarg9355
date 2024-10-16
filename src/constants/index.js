
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    codesphere
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
    ,
    {
        name: "Job-Portal",
        description:
            " Built a Job Portal with recruiter and candidate functionality using Supabase. Implemented Clerk authentication for secure user management. Designed UI with ShadCN components for a clean frontend. Enabled recruiter job posts and candidate applications in a unified system. Managed sequential data storage in Supabase tables",
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
                name: "Tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "Clerk",
                color: "blue-text-gradient",
            },
            {
                name: "SupaBase",
                color: "green-text-gradient",
            },
            {
                name: "Shadcn",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://job-portal-itz10pankajs-projects.vercel.app/",
    },
    {
        name: "Code-Sphere",
        description:
            "This project is a web-based code editor built with React, offering a smooth coding experience. It is mainly based on local storage of browser.It uses the CodeMirror library for syntax highlighting and supports languages like JavaScript, Python,Java, and C++. Users can choose from themes like GitHub Dark, Dracula, and VSCode Dark. The editor also supports full-screen mode to improve focusy.",
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
                name: "Tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "code-mirror",
                color: "blue-text-gradient",
            },
        ],
        image: codesphere,
        source_code_link: "https://code-editor-itz10pankajs-projects.vercel.app/",
    },
    {
        name: "Vehicle Rental System",
        description:
            "The Vehicle Rental System is a console-based C++ application that allows users to rent vehicles such as Cars, Bikes, and Trucks. Admins can manage the vehicle inventory by adding, updating, and deleting vehicles, while users can book and return vehicles for a specified period. The system is designed using Object-Oriented Programming (OOP) principles to ensure modularity and ease of maintenance. It features a simple login system for both admins and users, with functionality for user registration. The program provides a streamlined interface for both managing and utilizing a vehicle rental service.",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient",
            },
            {
                name: "Object Oriented programming",
                color: "green-text-gradient",
            },

        ],
        image: tripguide,
        source_code_link: "https://code-editor-itz10pankajs-projects.vercel.app/",
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
