import { FaLightbulb,FaBookOpen, FaPaintBrush,FaVideo, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot,FaRocket, FaLaptopCode, FaUsers,FaMapMarkerAlt, FaCss3Alt } from 'react-icons/fa';
import { SiGooglegemini,  SiExpress,  SiMongodb, SiJsonwebtokens, SiWebrtc, SiJavascript} from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";

import profileImg1 from '../assets/profile1.jpeg';
import profileImg2 from '../assets/profile2.png';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.avif';



export const assets = {
    profileImg1,
    profileImg2,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    description:
      "I enjoy solving real-world challenges by building practical and efficient web applications.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "User-Focused Design",
    description:
      "I create responsive and intuitive interfaces that deliver a seamless user experience.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write clean, maintainable, and scalable code following modern development practices.",
    color: "text-blue",
  },
  {
    icon: FaRocket,
    title: "Fast Learner",
    description:
      "I quickly adapt to new technologies and continuously improve my technical skills.",
    color: "text-green",
  },
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    description:
      "I build complete web applications using React, Node.js, Express, and MongoDB.",
    color: "text-orange",
  },
  {
    icon: FaUsers,
    title: "Team Collaboration",
    description:
      "I enjoy collaborating with others, sharing ideas, and contributing to successful projects.",
    color: "text-cyan",
  },
];



export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive, modern, and interactive user interfaces with React and Tailwind CSS.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Developing secure REST APIs and server-side applications using Node.js and Express.",
    tags: ["Node.js", "Express.js", "REST API", "JWT"]
  },
  {
    title: "Database",
    icon: FaDatabase,
    description:
      "Designing and managing databases for scalable and efficient web applications.",
    tags: ["MongoDB", "Mongoose", "MySQL"]
  },
  {
    title: "Programming Languages",
    icon: FaCode,
    description:
      "Writing clean and efficient code using modern programming languages.",
    tags: ["JavaScript", "Java", "SQL"]
  },
  {
    title: "Deployment & Tools",
    icon: FaCloud,
    description:
      "Deploying applications and managing projects using modern development tools.",
    tags: ["Git", "GitHub", "Vercel", "Render", "Postman"]
  },
  {
    title: "Development Tools",
    icon: FaTools,
    description:
      "Using essential tools to streamline development and improve productivity.",
    tags: ["VS Code", "npm", "Figma", "Cloudinary", "MongoDB Atlas"]
  },
  {
  title: "Continuous Learning",
  icon: FaBookOpen,
  description:
    "I am passionate about continuous learning and regularly improve my skills by exploring new technologies, building real-world projects, and staying updated with the latest industry trends.",
  tags: [
    "MERN Stack",
    "DSA",
    "System Design",
    "AI Tools"
  ]
}
];



export const projects = [
  {
    title: "AI-Thumbnail Generator",
    description: "Generates AI-powered thumbnails from user prompts with a responsive interface.Supports secure image storage, thumbnail history, and easy access to previous creations.",
    image: projectImg1,
    tech: ["React,js", "Node.js","Express.js", "MongoDB", "Gemini API", "Cloudinary"],
    icons: [FaReact, FaNodeJs, SiExpress,  SiMongodb , SiGooglegemini, FaCloud],
    demo: "https://thumblify-client-ivory.vercel.app/",
    code: "https://github.com/ankit-clasker/thumblify-fullstack",
  },
  {
    title: "Event Booking Platform",
    description: "Built an event booking platform for exploring events and booking tickets online.Implemented user authentication, booking management, and a responsive interface.",
    image: projectImg2,
    tech: [  "React.js", "Node.js","Express.js","MongoDB","JWT","REST API","OTP Verification"],
    icons: [FaReact, FaNodeJs, SiExpress, SiMongodb, SiJsonwebtokens, FaServer, MdMarkEmailRead],
    demo: "https://eventora-client-5ant.onrender.com/",
    code: "https://github.com/ankit-clasker/Eventora",
  },
  {
    title: "Hotel Booking App",
    description: "A modern hotel booking platform where users can explore properties, manage listings, and share reviews. Features secure authentication, image uploads, and interactive maps.",
    image: projectImg3,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mapbox", "Cloudinary", "REST API"],
    icons: [FaReact, FaNodeJs, SiExpress, SiMongodb, FaMapMarkerAlt, FaCloud, FaServer],
    demo: "https://wanderlust-project-mzyv.onrender.com/listings",
    code: "https://github.com/ankit-clasker/wanderlust-project",
  },
  {
    title: "Zego Voice & Video Chat App",
    description: "A real-time communication app that enables users to make seamless voice and video calls with a simple and responsive interface.",
    image: projectImg4,
    tech: ["React.js", "JavaScript", "ZEGOCLOUD SDK", "WebRTC", "CSS"],
    icons: [FaReact, SiJavascript, FaVideo, SiWebrtc, FaCss3Alt],
    demo: "https://ankit-clasker.github.io/Zego-voicecall/",
    code: "https://github.com/ankit-clasker/Zego-voicecall",
  }
];


export const studyData = [
  {
    role: "RR Institute of Modern Technology",
    company: "B.tech in Information Technology",
    duration: "2022 - 2026",
    description:
      "CGPA: 7.6",
    color: "purple"
  },
  {
    role: "S M K Inter College Khoribari Deoria",
    company: "Intermediate in Science",
    duration: "2021 - 2022",
    description:
      "Percentage: 70.14%",
    color: "pink"
  },
  {
    role: "J D G S I C Dumari Bhatni Deoria",
    company: "High School",
    duration: "2020 - 2021",
    description:
      "Percentage: 78%",
    color: "blue"
  }
];
