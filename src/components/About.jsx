import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id="about"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-0 px-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-4">
                    About <span className="text-purple">Me</span>
                </h2>

                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                    Get to know more about my background, skills, and experience.
                </p>

                {/* Image + my journey */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="w-full h-full object-cover"
                            src={assets.profileImg2} alt="" />
                    </div>
                    {/* My Journey */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                            <p className="text-gray-300 mb-6">I'm a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications using the MERN stack.
                                 My journey began with learning HTML, CSS, and JavaScript, and has grown into developing full-stack projects that solve real-world problems 
                                 with clean and efficient code.</p>

                                 <p className="text-gray-300 mb-12">When I'm not coding, I enjoy exploring new technologies, improving my development skills,and working on personal projects
                                     to expand my knowledge. I believe in continuous learning, writing quality code,
                                     and creating digital experiences that are both functional and impactful.</p>

                                     {/* Cards */}
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {
                                            aboutInfo.map((data, index) => (
                                                <div key={index} className="bg-dark-300 p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-2
                                                cursor-pointer">
                                                    <div className="text-purple text-4xl mb-4">
                                                        <data.icon/>
                                                    </div>
                                                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                                                    <p className="text-gray-400">{data.description}</p>
                                                </div>
                                            ))
                                        }
                                     </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;