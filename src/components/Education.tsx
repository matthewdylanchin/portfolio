"use client";
import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Computing and Software Systems",
      institution: "University of Melbourne",
      period: "2023 – 2025",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
