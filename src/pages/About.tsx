import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import TeamMember from "@/components/TeamMember";
import { team } from "@/constants/team";
import { Button } from "@/components/ui/button";
import { CloudCog, Users, BarChart3, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Nayvoh Tech | DevOps & Cloud Solutions</title>
        <meta
          name="description"
          content="Learn more about Nayvoh Tech, our journey, mission, vision, and the expert team behind our innovative DevOps and cloud solutions."
        />
        <link rel="canonical" href="https://nayvohtech.com/about" />
        <meta property="og:title" content="About Nayvoh Tech" />
      </Helmet>

      <Navbar />

      <main className="overflow-hidden">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-b from-nayvoh-900 to-nayvoh-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                About Nayvoh Tech
              </h1>
              <p className="text-xl text-white/80">
                Our journey toward DevOps and cloud excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    About Us
                  </h2>
                  <p className="text-gray-600 mb-4">
                  At Nayvoh Tech, we provide DevOps-driven cloud solutions with full-stack support, including UI/UX design, backend development, and data analysis. Our expert team automates processes, optimizes cloud infrastructure, and ensures secure, scalable operations. Focused on timely delivery and long-term performance, Nayvoh Tech is your trusted partner in digital transformation.
                  </p>
                  <p className="text-gray-600">
                    Today, we’re proud to have helped numerous organizations modernize their infrastructure and embrace a culture of continuous improvement.
                  </p>
                </RevealOnScroll>
              </div>

              <div className="md:w-1/2">
                <RevealOnScroll delay={200}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-nayvoh-600 rounded-lg blur opacity-30"></div>
                    <div className="relative bg-white rounded-lg shadow-md p-8">
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
        <section className="py-16 md:py-24 bg-gray-50 relative">
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Mission & Vision
              </h2>
            </RevealOnScroll>

            {/* Vision Card: Illustration on right, Text on Left */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              {/* Text block on Left */}
              <div className="md:w-1/2 relative pr-6 md:pr-12">
                {/* Vertical line on the right side for Vision */}
                <span className="hidden md:block absolute top-0 right-0 w-[8px] h-full bg-nayvoh-600"></span>
                <RevealOnScroll>
                  <h3 className="text-6xl font-bold mb-4">Our Vision</h3>
                  <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <p className="text-gray-600 mt-8">
                      Pioneering a new era in tech with disruptive DevOps and cloud innovations that empower agile transformations and drive industry-wide excellence.
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
              {/* Illustration on Right */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/images/mission_vission/vision.svg"
                  alt="Vision Illustration"
                  className="w-2/3 h-auto object-cover"
                />
              </div>
            </div>

            {/* Mission Card: Illustration on Left, Text on Right */}
            <div className="flex flex-col md:flex-row items-center">
              {/* Illustration on Left */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/images/mission_vission/mission.svg"
                  alt="Mission Illustration"
                  className="w-2/3 h-auto object-cover"
                />
              </div>
              {/* Text block on Right */}
              <div className="md:w-1/2 relative pl-6 md:pl-12">
                {/* Vertical line on the left side for Mission */}
                <span className="hidden md:block absolute top-0 left-0 w-[8px] h-full bg-nayvoh-600"></span>
                <RevealOnScroll>
                  <h3 className="text-6xl font-bold mb-4">Our Mission</h3>
                  <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <p className="text-gray-600 mt-8">
                      Accelerating digital evolution with state-of-the-art, resilient DevOps and cloud strategies that simplify complexity, optimize performance, and propel businesses into the future.
                    </p>
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
      </main>

      <Footer />
    </>
  );
};

export default About;
