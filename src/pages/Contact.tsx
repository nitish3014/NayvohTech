
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>

      <Helmet>
        <title>Contact Nayvoh Technologies | DevOps & Cloud Solutions</title>
        <meta
          name="description"
          content=" Contact Nayvoh Technologies for innovative DevOps and cloud solutions."
        />
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
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
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
                    <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                    <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-nayvoh-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-nayvoh-600 transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-nayvoh-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <address className="text-gray-600 not-italic">
                        123 Tech Street, Suite 456<br />
                        San Francisco, CA 94107
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                    <a href="https://github.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center text-nayvoh-600 hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center text-nayvoh-600 hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center text-nayvoh-600 hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                    <a href="https://instagram.com" className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center text-nayvoh-600 hover:bg-nayvoh-600 hover:text-white transition-colors" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
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
    </>
  );
};

export default Contact;
