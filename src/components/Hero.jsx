import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaDownload } from "react-icons/fa";


const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="home"
            className="min-h-screen flex items-center pt-20 pd-16 bg-gradient-to-r from-
        [#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]">

            <div className="container mx-auto px-6 flex flex-col md:flex-row
            items-center justify-between">
                {/* Left side content */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-purple">Ankit Yadav</span>
                    </h1>
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl md:text-4xl font-semibold typewriter">
                            Full Stack Developer
                        </h2>
                    </div>
                    <div className="mb-2">
                                                <a
                            href="/resume.pdf"
                            download="Ankit_Kumar_Yadav_Resume.pdf"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray text-white rounded-md text-sm hover:bg-purple-700 transition duration-300 whitespace-nowrap"
                        >
                            <FaDownload className="text-xs" />
                            Download Resume
                        </a>
                    </div>

                    <p className="text-lg text-gray-300 mb-8">
                        Passionate Full Stack Developer specializing in the MERN stack. I build
                        responsive, scalable, and user-friendly web applications while constantly
                        learning new technologies and solving real-world problems.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#projects" className="px-6 py-3 bg-purple
                        rounded-lg font-medium hover:bg-purple-700 transition
                        duration-300">View Work</a>
                        <a href="#contact" className="px-6 py-3 border border:purple
                        rounded-lg font-medium hover:bg-purple/20 transition
                        decoration-purple-300">Contact Me</a>
                    </div>

                </div>
                {/* Right Side content */}
                <div className="md:w-1/2 flex  justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink 
                ">
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10" src={assets.profileImg1} alt="Profile" />
                                
                        </div>
                    </div>

                </div>
            </div>


        </motion.div>
    );
};
export default Hero;