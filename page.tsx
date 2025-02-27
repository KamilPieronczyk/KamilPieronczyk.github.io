"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { SiNextdotjs, SiReact, SiAngular, SiNestjs, SiDotnet, SiMysql, SiMongodb } from "react-icons/si";

const ParticleBackground = dynamic(() => import("./components/ParticleBackground"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-zinc-100 dark:bg-zinc-900" />,
});

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors duration-300">
      <ParticleBackground />
      <div className="max-w-3xl mx-auto px-4 py-20 relative z-10">
        <header className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight">Kamil Pierończyk</h1>
            <div className="flex items-center mt-2">
              <div className="h-1 w-1 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <p className="text-zinc-600 dark:text-zinc-400">Fullstack Developer</p>
            </div>
          </motion.div>
          <button
            onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors duration-300"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </header>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;ve been working in IT since 2021, specializing in full-stack development. I build robust, scalable applications with modern technologies and
            best practices.
          </p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <TechCard Icon={SiNextdotjs} title="Next.js" />
            <TechCard Icon={SiReact} title="React" />
            <TechCard Icon={SiAngular} title="Angular" />
            <TechCard Icon={SiNestjs} title="Nest.js" />
            <TechCard Icon={SiDotnet} title=".NET" />
            <TechCard Icon={SiMysql} title="SQL" />
            <TechCard Icon={SiMongodb} title="MongoDB" />
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="space-y-4">
            <ProjectCard
              title="Hotel Olympic"
              description="Official website for Hotel Olympic with booking capabilities."
              technologies={["Next.js", "Strapi", "AWS"]}
              link="https://hotelolympic.pl"
            />
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-4">
            <ExperienceCard company="Euvic" position="Fullstack Developer" period="Since 2021" />
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }} className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <div className="space-y-4">
            <motion.a
              href="mailto:kamil.pieronczyk@gmail.com"
              className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-5 h-5 mr-3" />
              kamil.pieronczyk@gmail.com
            </motion.a>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Github className="w-5 h-5 mr-3" />
              GitHub
              <ExternalLink className="w-4 h-4 ml-1" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn
              <ExternalLink className="w-4 h-4 ml-1" />
            </motion.a>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Kamil Pierończyk. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}

function TechCard({ Icon, title }) {
  return (
    <motion.div
      className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-800 transition-colors duration-300 flex flex-col items-center"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-12 h-12 mb-3 text-zinc-700 dark:text-zinc-300" />
      <h3 className="font-medium text-center">{title}</h3>
    </motion.div>
  );
}

function ProjectCard({ title, description, technologies, link }) {
  return (
    <motion.div
      className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-800 transition-colors duration-300"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{title}</h3>
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            whileHover={{ scale: 1.1 }}
          >
            <Globe className="w-5 h-5" />
          </motion.a>
        )}
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded text-xs">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceCard({ company, position, period }) {
  return (
    <motion.div
      className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-800 transition-colors duration-300"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-2">
        <Briefcase className="w-5 h-5 mr-3 text-zinc-800 dark:text-zinc-200" />
        <h3 className="font-medium">{company}</h3>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400">{position}</p>
      <p className="text-zinc-500 dark:text-zinc-500 text-sm">{period}</p>
    </motion.div>
  );
}
