
import { Link } from "react-router-dom";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Nayvoh Technologies</h2>
            <p className="text-gray-400 mb-4">
              A journey towards knowledge and growth in cloud technology and DevOps excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Tools
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> CI/CD Pipelines
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Kubernetes Orchestration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Observability
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Infrastructure as Code
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-nayvoh-500" />
                <span className="text-gray-400">
                  Padwal Nagar <br />
                  Wagle Estate , Thane-400604
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-nayvoh-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 9987274285
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-nayvoh-500" />
                <a href="mailto:info@nayvohtech.com" className="text-gray-400 hover:text-white transition-colors">
                  info@nayvohtech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nayvoh Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
