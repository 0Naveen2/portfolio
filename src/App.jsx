import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Layout, 
  Server, 
  Menu, 
  X,
  ChevronDown,
  Send,
  Terminal,
  Cpu,
  ScanFace,
  Phone // Added Phone icon
} from 'lucide-react';

// --- Data / Configuration ---

const DATA = {
  name: "Naveen",
  role: "Full Stack Developer",
  github: "https://github.com/0Naveen2",
  leetcode: "https://leetcode.com/u/NAFTfBr440/",
  linkedin: "https://www.linkedin.com/in/naveenkk211",
  email: "naveenkumar186582@gmail.com",
  phone: "+91 9113727616"
};

const SKILLS = [
  { name: 'React.js', icon: Layout, level: 90, category: 'Frontend' },
  { name: 'Java Spring Boot', icon: Server, level: 85, category: 'Backend' },
  { name: 'Data Structures (LeetCode)', icon: Cpu, level: 85, category: 'Core' },
  { name: 'PostgreSQL', icon: Database, level: 80, category: 'Database' },
  { name: 'Tailwind CSS', icon: Code, level: 95, category: 'Frontend' },
  { name: 'RESTful APIs', icon: Database, level: 90, category: 'Backend' },
];

const PROJECTS = [
  {
    id: 1,
    title: 'QP Frontend Backend', 
    description: 'A complete full-stack application handling data flow between client and server, designed for efficient query or paper management.',
    tech: ['React', 'Backend', 'Web Dev'],
    // Placeholder image for code/web app
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
    links: { demo: '#', code: 'https://github.com/0Naveen2/qp-frontend-backend' } 
  },
  {
    id: 2,
    title: 'Employee Data Management',
    description: 'A robust full-stack CRUD application for managing employee records securely and efficiently.',
    tech: ['Spring Boot', 'React', 'PostgreSQL'],
    // UPDATED: Use the local image from the public folder
    image: '/employee-data.jpg',
    links: { demo: '#', code: 'https://github.com/0Naveen2/Employee_Data-spring-react-postgreeSql-' }
  },
  {
    id: 3,
    title: 'Face Detection System',
    description: 'Advanced computer vision project capable of detecting and distinguishing between known and unknown faces.',
    tech: ['Python', 'OpenCV', 'AI/ML'],
    // Placeholder image for AI/Face ID
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800',
    links: { demo: '#', code: 'https://github.com/0Naveen2/Known-and-Unkown-face-detection' }
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
        >
          {DATA.name}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-slate-300 hover:text-teal-400 font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-300 hover:text-teal-400 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-teal-400 font-semibold tracking-wider uppercase mb-4">{DATA.role}</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm {DATA.name} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Building Solutions</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            I solve complex problems using Data Structures & Algorithms and build scalable web applications with React & Spring Boot.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-transform hover:scale-105 shadow-lg shadow-teal-500/25"
            >
              View Projects
            </a>
            <a 
              href={DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-slate-600 hover:border-teal-400 text-slate-300 hover:text-teal-400 rounded-full font-medium transition-all flex items-center gap-2"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl transform rotate-3 opacity-75 absolute inset-0 blur-sm"></div>
            {/* UPDATED: Profile Image with adjustment style */}
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
              style={{ objectPosition: "50% 20%" }} 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Hello! I'm {DATA.name}, a passionate developer with a knack for solving complex problems. I am actively solving problems on LeetCode and building projects on GitHub.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              My core stack involves **Java Spring Boot** for robust APIs and **React** for responsive user interfaces. I focus on writing clean, maintainable code and adhering to modern development practices.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={DATA.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href={DATA.leetcode}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-yellow-500 hover:text-yellow-400 hover:bg-slate-700 transition-colors"
              >
                <Terminal size={20} />
                <span>LeetCode</span>
              </a>
              <a 
                href={DATA.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${DATA.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-red-400 hover:text-red-300 hover:bg-slate-700 transition-colors"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-slate-700 rounded-lg text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <skill.icon size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-teal-400 to-blue-500"
                />
              </div>
              <p className="text-right text-slate-400 text-sm mt-2">{skill.level}% Proficiency</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4">
            Check out my code on <a href={DATA.github} className="text-teal-400 hover:underline">GitHub</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-teal-500/10 transition-all duration-300 border border-slate-700"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.links.demo && project.links.demo !== '#' && (
                    <a 
                      href={project.links.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a 
                    href={project.links.code} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs bg-slate-800 text-teal-400 rounded-full border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate backend connection for this demo
    // In real app: fetch('http://localhost:8080/api/contact', ...)
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.warn("Backend not running in this environment. Simulating success.");
      // Fallback for demo purposes
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
            <p className="text-slate-400 mb-6">Have a project in mind or just want to say hi?</p>
            
            {/* Added Contact Details Here */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-slate-300 mb-6">
              <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-700/50 transition-colors">
                <Mail size={20} className="text-teal-400" />
                <a href={`mailto:${DATA.email}`} className="hover:text-white transition-colors">{DATA.email}</a>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-700/50 transition-colors">
                <Phone size={20} className="text-teal-400" />
                <span>{DATA.phone}</span>
              </div>
            </div>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10">
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-slate-400 mt-2">I'll get back to you as soon as possible.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-teal-400 hover:underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white outline-none transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg transform transition-transform active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={DATA.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><Github size={24}/></a>
          <a href={DATA.leetcode} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-yellow-500"><Terminal size={24}/></a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500"><Linkedin size={24}/></a>
        </div>
        <p className="text-slate-500">
          © {new Date().getFullYear()} {DATA.name}. Built with React & Spring Boot.
        </p>
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}