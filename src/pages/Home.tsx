
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { services } from "@/constants/services";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-gray-600">
                We provide end-to-end DevOps and cloud infrastructure solutions to help your business scale efficiently.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.slice(0, 6).map((service, index) => (
              <RevealOnScroll key={service.id} delay={100 * index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </RevealOnScroll>
            ))}
          </div>
          
          <RevealOnScroll delay={300}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="group">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="gradient-text">Nayvoh Tech</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  We combine technical expertise with industry best practices to deliver reliable, scalable, and secure infrastructure solutions tailored to your needs.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Expert team with extensive industry experience",
                    "Tailored solutions for your specific business needs",
                    "Continuous support and maintenance",
                    "Cost-effective infrastructure optimization",
                    "Future-proof technology stack"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-nayvoh-600 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button asChild className="bg-nayvoh-600 hover:bg-nayvoh-700">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="md:w-1/2">
              <RevealOnScroll delay={200}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-nayvoh-600 to-purple-600 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white rounded-lg shadow-xl p-8">
                    <div className="aspect-video bg-gray-100 rounded-md mb-6 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <span className="text-nayvoh-600 font-bold text-xl">Nayvoh Tech</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-2.5 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full w-5/6"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how Nayvoh Tech can help you build scalable, secure, and efficient cloud solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-nayvoh-700 hover:bg-gray-100">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white bg-gray-900 hover:text-nayvoh-700 hover:border-white hover:bg-white">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
