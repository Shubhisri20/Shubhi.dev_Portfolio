import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form - in a real application, your message would be sent.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me for collaboration, opportunities, or just to say hello!
                I'm always open to discussing new projects and ideas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email</h4>
                  <a href="mailto:shubhisrivastava239@gmail.com" className="text-white hover:text-purple-400 transition-colors duration-300">
                    shubhisrivastava239@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Phone</h4>
                  <a href="tel:+918574446744" className="text-white hover:text-purple-400 transition-colors duration-300">
                    +91 8574446744
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Linkedin className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">LinkedIn</h4>
                  <a href="https://linkedin.com/in/shubhi-srivastava-b31132292" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300">
                    linkedin.com/in/shubhi-srivastava-b31132292
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Github className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">GitHub</h4>
                  <a href="https://github.com/Shubhisri20" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors duration-300">
                    github.com/Shubhisri20
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;