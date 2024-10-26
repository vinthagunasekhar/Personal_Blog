import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Moon, 
  Sun, 
  ArrowRight, 
  ChevronDown,
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// Custom LeetCode Icon Component
const LeetCodeIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);
const getTorontoTime = () => {
  const options = { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true, 
    timeZone: 'America/Toronto' 
  };
  return new Date().toLocaleTimeString('en-US', options);
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [currentTime, setCurrentTime] = useState(getTorontoTime());
  const [greeting, setGreeting] = useState(getGreeting());


  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getTorontoTime());
      setGreeting(getGreeting());
    }, 60000); // Updates every minute

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const mainContent = document.querySelector('main');
    mainContent.scrollIntoView({ behavior: 'smooth' });
  };

  

  const socialLinks = {
    github: "https://github.com/gazijarin",
    linkedin: "https://www.linkedin.com/in/guna-sekhar-vintha",
    leetcode: "https://leetcode.com/u/vinthagunasekhar/",
    email: "mailto:vinthag@mcmaster.ca"
  };

  const tabs = ["ABOUT", "EXPERIENCE", "PROJECTS"];

  const experiences = [
    {
      title: "Automation Developer",
      company: "Royal Bank of Canada (RBC)",
      date: "Sep. 2024 - Present",
      points: [
        "'The Intern' position focusing on automation developer."
      ]
    },
    {
      title: "Software Engineer",
      company: "Price Waterhouse Coopers AC",
      date: "2021 - 2023",
      points: [
        "Spearheaded a Security ITAC SOX controls team and conducted security data analysis using Alteryx and Tableau on HANA DB, resulting in an 85% reduction in testing hours.",
        "Engineered the System Upgrade (SU25), resolving roles design in 4 development systems.",
        "Orchestrated roles and streamlined user creation and role assignments, improving operational efficiency by 55%."
      ]
    }
  ];

  const projects = [
    {
      title: "Watched Media Tracker",
      description: "A comprehensive media consumption tracking platform.",
      tech: ["Ruby", "Rails", "Selenium", "REST API"],
      github: "https://github.com/yourusername/media-tracker",
    },
    {
      title: "Music Merlin Classifier",
      description: "ML-powered music genre classification system with 90% accuracy.",
      tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
      github: "https://github.com/yourusername/music-classifier",
    },
    {
      title: "GitHub Code Summarizer",
      description: "LLM-based tool for analyzing and summarizing code repositories.",
      tech: ["Python", "GCP", "BigQuery", "PaLM API"],
      github: "https://github.com/yourusername/code-summarizer",
    }
  ];

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-6xl font-mono text-blue-500 animate-pulse">&gt;_</div>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen font-mono`}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Canada</span>
          </div>
          <span className="text-sm text-gray-400">|</span>
          <span className="text-sm">{currentTime} ET</span>
          <span className="text-sm text-gray-400">|</span>
          <span className="text-sm text-blue-500">{greeting}!</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-4 animate-fadeIn">
          <div className="h-8 mb-8">
            <TypeAnimation
              sequence={[
                'May the brute force be with you',
                2000,
                '',
                100,
                'I push code on Fridays not on Mondays sorry...',
                2000,
                '',
                100,
                'LLMs/GenAI is the new "AI/ML"',
                2000,
                '',
                100,
                'Neural Networks are the new normal',
                2000,
                '',
                100,
                'BUILD EVALUATE SHIP REPEAT',
                2000,
                '',
                100,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-lg text-blue-500"
              speed={{ type: 'keyStroke', value: 50 }}
              deletionSpeed={75}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-blue-500">Hello, I'm</span> Guna Sekhar.
          </h1>
          <h2 className="text-2xl md:text-4xl">I build, evalute and deploy models/code:)</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            I'm a software engineer. I'm fascinated by large-scale software products and language models.
            Currently undertaking Master of Engineering in Systems and Technology at McMaster University.
          </p>
          <button 
            onClick={scrollToAbout}
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded hover:bg-blue-500 hover:text-white transition-colors mt-8"
          >
            Check out my work!
          </button>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-500" />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-20" id="about">
        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index 
                  ? 'text-blue-500 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-blue-500'
              } pb-2 transition-colors`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* About Section */}
        {activeTab === 0 && (
          <div className="space-y-6 animate-fadeIn">
            <p className="text-gray-400 leading-relaxed">
              Hello! I'm Guna, a software engineer from Toronto, Canada. Passionate about creating technology to elevate people's lives.
              <br /><br /> 
              I specialize in building (and occasionally designing) build, test and deploy models as well as software code.
              <br /><br />
              Outside of work, I'm interested in following the developments of Fintech. I watch a lot of movies and Shows.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Here are a few tech stack I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {['Python', 'Java', 'Flask', 'Azure', 'Machine Learning', 'Gen AI', 'MongoDB','API'].map((tech) => (
                <li key={tech} className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Experience Section */}
{activeTab === 1 && (
  <div className="space-y-8 animate-fadeIn">
    {experiences.map((exp, index) => (
      <div key={index} className="group relative pl-8 border-l border-gray-800">
        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-[5px]" />
        <div className="flex items-center space-x-2">
          <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
            {exp.title} @ {exp.company}
          </h3>
          {index === 0 && (
            <span className="px-2 py-1 text-xs bg-blue-500 bg-opacity-10 text-blue-500 rounded">
              Current
            </span>
          )}
        </div>
        <p className="text-gray-500 mb-4">{exp.date}</p>
        <ul className="space-y-4">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start space-x-2 text-gray-400">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}
        {/* Projects Section */}
        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-500 bg-opacity-10 text-blue-500 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Side Links */}
      <div className="fixed left-8 bottom-0 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <a 
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <LeetCodeIcon className="w-5 h-5" />
          </a>
          <a 
            href={socialLinks.email}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <div className="w-px h-24 bg-gray-400" />
        </div>
      </div>

      {/* Side Email */}
      <div className="fixed right-8 bottom-0 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <a 
            href={socialLinks.email}
            className="text-gray-400 hover:text-blue-500 transition-colors writing-vertical"
          >
            vinthag@mcmaster.ca
          </a>
          <div className="w-px h-24 bg-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;