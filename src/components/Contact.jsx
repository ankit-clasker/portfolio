import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram  } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { LiaLinkedin } from 'react-icons/lia';


const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="contact"
            className="py-20 bg-dark-200">

            <div className="container mx-auto px-16">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    Get In
                    <span className="text-purple">Touch</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Looking for a Full Stack Developer? Feel free to get in touch. I'd be happy to connect.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3
                                outline-none focus:ring-2 focus:ring-purple focus:border-transparent text-gray-300"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3
                                outline-none focus:ring-2 focus:ring-purple focus:border-transparent text-gray-300"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3
                                outline-none focus:ring-2 focus:ring-purple focus:border-transparent text-gray-300"
                                    placeholder="Enter your message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 
                            transition duration-300 cursor-pointer text-white focus:outline-none focus:ring-2 focus:ring-purple focus:ring-opacity-50"
                            >
                                Send Message
                            </button>


                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 '>Location</h3>
                                <p className="text-gray-400">Badarpur, Delhi, India</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 '>Email</h3>
                                <p className="text-gray-400">ankit2005pky@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
                                <p className="text-gray-400">+91 7355160705</p>
                            </div>
                        </div>

                        <div className="pt-4 ">
                            <h3 className='text-lg font-semibold mb-2 '>Follow Me</h3>
                            <div className='flex space-x-4'>
<a
  href="https://github.com/ankit-clasker?tab=overview&from=2026-06-01&to=2026-06-30"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
             text-white hover:bg-white hover:text-black transition-all duration-300"
>
  <FaGithub />
</a>

<a
  href="www.linkedin.com/in/ankit-kumar-yadav-91b933295"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
             text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
>
  <FaLinkedin />
</a>

<a
  href="https://www.instagram.com/ankit_clasker?igsh=MTJjYXU4a3drcTB4Nw=="
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
             text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300"
>
  <FaInstagram />
</a>

<a
  href="https://leetcode.com/u/ankit_clasker/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
             text-[#FFA116] hover:bg-[#FFA116] hover:text-white transition-all duration-300"
>
  <SiLeetcode />
</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Contact
