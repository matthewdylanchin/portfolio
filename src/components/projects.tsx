"use client";

import { motion } from "framer-motion";
import { Book, LandPlot, Layout } from "lucide-react";
import React from "react";

export default function Projects() {
  const projects = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Custom Web Applications",
      description:
        "Custom web applications built with React and Next.js, focusing on performance and user experience.",
    },
    {
      icon: <LandPlot className="w-12 h-12 text-green-500" />,
      title: "Chessformer AI",
      description:
        "Developed an AI solver for Chess former, a puzzle game based on chess moves and platform-based movement constraints, capturing all target pieces across 1,000+ board states by exploring all possible paths with Dijkstra's algorithm.",
    },
    {
      icon: <Book className="w-12 h-12 text-purple-500" />,
      title: "Link List Based Dictionary ",
      description:
        "Developed a dictionary system using a linked list in C to manage and manipulate data based on Australian suburbs",
    },
    // {
    //   icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
    //   title: "Responsive Design",
    //   description:
    //     "Mobile-first, responsive web designs that work flawlessly across all devices and screen sizes.",
    // },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
