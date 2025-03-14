
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import TeamMember from "@/components/TeamMember";
import { team } from "@/constants/team";
import { Button } from "@/components/ui/button";
import { CloudCog, Users, BarChart3, Target } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
    <Navbar />
   
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-nayvoh-600 via-nayvoh-700 to-nayvoh-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <RevealOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nayvoh Technologies</h1>
              <p className="text-xl text-white/80">
                A journey towards knowledge and growth in cloud technology and DevOps excellence.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Nayvoh Technologies was founded in 2018 by a team of passionate DevOps engineers and cloud architects with a shared vision: to help businesses leverage the power of modern infrastructure and automation.
                </p>
                <p className="text-gray-600 mb-4">
                  We recognized that many organizations struggle with the complexity of modern cloud technologies and microservices architectures. Our mission became clear: simplify this complexity and empower businesses to focus on their core competencies.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have helped dozens of organizations across various industries modernize their infrastructure, improve their deployment processes, and embrace a culture of continuous improvement.
                </p>
              </RevealOnScroll>
            </div>
            
            <div className="md:w-1/2">
              <RevealOnScroll delay={200}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-nayvoh-600 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white rounded-lg shadow-xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CloudCog className="h-6 w-6 text-nayvoh-600" />
                        </div>
                        <h3 className="font-bold">Modern Infrastructure</h3>
                      </div>
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-nayvoh-600" />
                        </div>
                        <h3 className="font-bold">Expert Team</h3>
                      </div>
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BarChart3 className="h-6 w-6 text-nayvoh-600" />
                        </div>
                        <h3 className="font-bold">Data-Driven</h3>
                      </div>
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-nayvoh-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="h-6 w-6 text-nayvoh-600" />
                        </div>
                        <h3 className="font-bold">Results-Focused</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission & Vision</h2>
            </RevealOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealOnScroll>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-nayvoh-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-nayvoh-600">M</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower organizations with innovative DevOps and cloud solutions that drive growth, efficiency, and technological advancement. We strive to simplify complex infrastructure challenges and create pathways for businesses to thrive in the digital era.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-nayvoh-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-nayvoh-600">V</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of transformative DevOps and cloud infrastructure solutions, recognized globally for our technical excellence, innovation, and client-focused approach. We envision a world where businesses can seamlessly leverage technology to achieve their fullest potential.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-gray-600">
                Meet the passionate experts behind Nayvoh Technologies who bring years of experience in cloud architecture, DevOps, and software engineering.
              </p>
            </RevealOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <RevealOnScroll key={member.id} delay={100 * index}>
                <TeamMember
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how our team can help you achieve your technology goals.
            </p>
            <Button asChild size="lg" className="bg-white text-nayvoh-700 hover:bg-gray-100">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
