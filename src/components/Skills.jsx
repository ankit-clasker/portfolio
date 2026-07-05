import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-12 sm:py-16 md:py-20 bg-dark-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-16 px-2">
          Technologies I work with to bring ideas to life
        </p>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6
            lg:gap-8
            max-w-5xl
            mx-auto
            w-full
          "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-dark-300
                p-4
                sm:p-5
                md:p-6
                rounded-2xl
                transition-transform
                duration-300
                hover:-translate-y-2
                cursor-pointer
                w-full
                min-w-0
                overflow-hidden
              "
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 min-w-0">
                <skill.icon
                  className="
                    w-8 h-8
                    sm:w-10 sm:h-10
                    md:w-12 md:h-12
                    text-purple
                    shrink-0
                  "
                />

                <h3 className="text-base sm:text-lg md:text-xl font-semibold break-words min-w-0">
                  {skill.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm sm:text-base mb-4 break-words">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 w-full">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-dark-400
                      px-2.5
                      sm:px-3
                      py-1
                      rounded-full
                      text-xs
                      sm:text-sm
                      max-w-full
                      break-words
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;