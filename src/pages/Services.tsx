
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/services";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const Services = () => {
  return (
    <>
    <Navbar />

    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-nayvoh-600 via-nayvoh-700 to-nayvoh-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <RevealOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-white/80">
                Comprehensive DevOps and cloud solutions to power your digital transformation.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-gray-600">
                We provide end-to-end solutions for your infrastructure needs, from cloud migration to continuous delivery pipelines and microservices architecture.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <RevealOnScroll key={service.id} delay={100 * index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-gray-600">
                We follow a structured approach to ensure successful delivery of every project.
              </p>
            </RevealOnScroll>
          </div>
          
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {[
                {
                  title: "Discovery & Assessment",
                  description: "We start by understanding your current infrastructure, requirements, and goals to identify opportunities for improvement."
                },
                {
                  title: "Planning & Architecture",
                  description: "Our experts design a tailored solution architecture that aligns with your business objectives and technical requirements."
                },
                {
                  title: "Implementation",
                  description: "We implement the solution using industry best practices, ensuring security, scalability, and reliability."
                },
                {
                  title: "Testing & Optimization",
                  description: "Rigorous testing and optimization to ensure the solution meets performance, security, and reliability standards."
                },
                {
                  title: "Deployment & Training",
                  description: "Smooth deployment with minimal disruption, followed by comprehensive knowledge transfer and training."
                },
                {
                  title: "Ongoing Support",
                  description: "Continuous monitoring, maintenance, and support to ensure your infrastructure remains optimized and up-to-date."
                }
              ].map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center items-center py-4">
                    <RevealOnScroll delay={index * 100}>
                      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-nayvoh-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-nayvoh-600 font-bold">{index + 1}</span>
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </RevealOnScroll>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center">
                    <div className="hidden md:flex relative">
                      <div className="w-6 h-6 bg-nayvoh-600 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits of Working With <span className="gradient-text">Nayvoh</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Our solutions are designed to deliver immediate value while positioning your organization for long-term success.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Reduced operational costs through automation and optimization",
                    "Increased deployment frequency and reliability",
                    "Enhanced security and compliance posture",
                    "Improved scalability and performance",
                    "Faster time to market for new features",
                    "Reduced downtime and improved system reliability"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-nayvoh-600 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="md:w-1/2">
              <RevealOnScroll delay={200}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-nayvoh-600 to-purple-600 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white rounded-lg shadow-xl p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-nayvoh-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-8 w-8 text-nayvoh-600" />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="h-2.5 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-nayvoh-200 rounded-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-nayvoh-300 rounded-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-nayvoh-400 rounded-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-nayvoh-500 rounded-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-nayvoh-600 rounded-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full flex-1"></div>
                      </div>
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
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how our services can address your specific challenges and help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-nayvoh-700 hover:bg-gray-100">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/tools">Explore Our Tools</Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
