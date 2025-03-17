import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Updated ContactForm with phone field and all fields mandatory
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      toast.error("All fields are required.");
      return;
    }
    
    console.log("Sending payload:", formData); // Debug log
    
    setLoading(true);

    try {
      const response = await fetch("https://contact-backend-one.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to send email.");

      toast.success("Email sent successfully!");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Error occurred:", error.message);
      toast.error("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-1 font-semibold">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="hover:bg-nayvoh-700 w-full font-semibold text-white px-4 py-2 rounded-md bg-nayvoh-600 transition-colors"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Nayvoh Technologies | DevOps & Cloud Solutions</title>
        <meta name="description" content="Contact Nayvoh Technologies for innovative DevOps and cloud solutions." />
      </Helmet>
      <Navbar />

      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-nayvoh-600 via-nayvoh-700 to-nayvoh-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <RevealOnScroll>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-white/80">
                  Get in touch with our team to discuss your project or any questions you may have.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column: Contact Details */}
              <div className="lg:w-1/2">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Let's <span className="gradient-text">Connect</span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Whether you have a specific project in mind or just want to explore how we can help, we'd love to hear from you. Fill out the form or use our contact information below.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-nayvoh-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <a href="mailto:info@nayvohtech.com" className="text-gray-600 hover:text-nayvoh-600 transition-colors">
                          info@nayvohtech.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-nayvoh-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <a href="tel:+91 9987274285" className="text-gray-600 hover:text-nayvoh-600 transition-colors">
                          (+91) 9987274285
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-nayvoh-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Address</h3>
                        <address className="text-gray-600 not-italic">
                          Padwal Nagar, Wagle Estate6<br />
                          Thane- 400604 INDIA
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4">
                        <Clock className="h-5 w-5 text-nayvoh-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://github.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="GitHub">
                        <Github size={20} />
                      </a>
                      <a href="https://linkedin.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin size={20} />
                      </a>
                      <a href="https://twitter.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="Twitter">
                        <Twitter size={20} />
                      </a>
                      <a href="https://instagram.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="Instagram">
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
              
              {/* Right Column: Contact Form */}
              <div className="lg:w-1/2">
                <RevealOnScroll delay={200}>
                  <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                    <ContactForm />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d58250.521025016555!2d72.9972722!3d19.1852513!3m2!1i1024!2i768!4f13.1!2m1!1swagle%20estate%20padwal%20nagar%20thane%20pincode!5e1!3m2!1sen!2sin!4v1742031590630!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </RevealOnScroll>
          </div>
        </section>
  
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Find answers to common questions about our services and process.
                </p>
              </RevealOnScroll>
            </div>
            
            <RevealOnScroll delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    question: "What is your typical project timeline?",
                    answer: "Project timelines vary based on scope and complexity, but most projects take between 4-12 weeks from initial consultation to full implementation."
                  },
                  {
                    question: "Do you offer ongoing support after project completion?",
                    answer: "Yes, we offer various support and maintenance packages to ensure your infrastructure continues to run smoothly after the initial implementation."
                  },
                  {
                    question: "Can you work with our existing infrastructure?",
                    answer: "Absolutely. We specialize in seamlessly integrating new solutions with existing infrastructure to minimize disruption and maximize ROI."
                  },
                  {
                    question: "How do you handle data security during transitions?",
                    answer: "We follow industry best practices for data security and compliance during all transitions, ensuring your sensitive information remains protected."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Don't see your question here? Feel free to reach out to us directly.
                </p>
                <Link to="#" className="text-nayvoh-600 font-medium hover:underline">
                  View all FAQs
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
