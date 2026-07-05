import React from "react";
import { motion } from "framer-motion";
import { studyData } from "../assets/assets";
import { FaArrowRight } from 'react-icons/fa';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="educations"
      className="py-12 sm:py-16 md:py-20 bg-dark-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Education</span>
        </h2>

        <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
          A brief overview of my educational background and academic journey.
        </p>

        <div className="max-w-3xl mx-auto w-full">
          <div className="space-y-8 sm:space-y-12">
            {studyData.map((data, index) => (
              <div
                key={index}
                className="
                  relative
                  pl-7
                  sm:pl-10
                  md:pl-12
                  min-w-0
                  before:content-['']
                  before:absolute
                  before:left-0
                  before:top-0
                  before:w-[2px]
                  before:h-full
                  before:bg-purple
                  cursor-pointer
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-[-0.4rem]
                    top-0
                    w-4 h-4
                    sm:w-5 sm:h-5
                    md:w-6 md:h-6
                    rounded-full
                    bg-purple
                  "
                />

                {/* Box */}
                <div className="bg-dark-300 rounded-2xl p-4 sm:p-5 md:p-6 w-full min-w-0 overflow-hidden">
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold break-words min-w-0">
                      {data.role}
                    </h3>

                    <span
                      className="
                        px-2.5
                        sm:px-3
                        py-1
                        bg-purple/20
                        text-purple
                        rounded-full
                        text-xs
                        sm:text-sm
                        whitespace-nowrap
                        self-start
                        shrink-0
                      "
                    >
                      {data.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base mb-2 break-words">
                    {data.company}
                  </p>

                  <p className="text-gray-300 text-sm sm:text-base break-words">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;