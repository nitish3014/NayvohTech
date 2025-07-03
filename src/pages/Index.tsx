import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/constants/services";
import { tools } from "@/constants/tools";
import ServiceCard from "@/components/ServiceCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ToolCard from "@/components/ToolCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000, // longer transition for smooth continuous motion
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // no delay between transitions
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Nayvoh Tech | DevOps & Cloud Solutions</title>
        <meta
          name="description"
          content="Nayvoh Tech provides expert DevOps, cloud infrastructure, and microservices solutions for the modern software industry."
        />
        <link rel="canonical" href="https://www.nayvohtech.com/" />
      </Helmet>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

{/* Problem statements in industry  */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl font-bold mb-3">
                  Industry Challenges We Solve
                </h2>
                <p className="text-gray-600">
                  Modern software development faces complex challenges - we provide elegant solutions
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem 1: Slow Pace Development */}
              <RevealOnScroll delay={100}>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-nayvoh-100 text-nayvoh-700 rounded-lg p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"/>
                        <path d="M4.82 7.9 8 10"/>
                        <path d="M15.18 7.9 12 10"/>
                        <path d="M16.93 10H20a2 2 0 0 1 0 4H2"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Slow Development Cycles</h3>
                      <p className="text-gray-600 mt-1">
                        Manual processes & large deployments create bottlenecks. We automate your workflow with CI/CD pipelines, enabling smaller & frequent releases.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Automated testing and deployment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Microservices architecture</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Infrastructure as Code</span>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Problem 2: Security */}
              <RevealOnScroll delay={200}>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-nayvoh-100 text-nayvoh-700 rounded-lg p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Security Vulnerabilities</h3>
                      <p className="text-gray-600 mt-1">
                        Late-stage security fixes are costly and disruptive. Our DevSecOps approach integrates security throughout your entire development lifecycle.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Automated vulnerability scanning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Compliance as code</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Secrets management</span>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Problem 3: Cloud Migration */}
              <RevealOnScroll delay={300}>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-nayvoh-100 text-nayvoh-700 rounded-lg p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Cloud Migration Complexities</h3>
                      <p className="text-gray-600 mt-1">
                        Legacy systems & operational challenges make cloud transitions difficult. Our cloud architects design smooth migration paths to your needs.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Multi-cloud strategy</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Cost optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Hybrid cloud solutions</span>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Problem 4: Outdated Technology */}
              <RevealOnScroll delay={400}>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-nayvoh-100 text-nayvoh-700 rounded-lg p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2"/>
                        <rect x="9" y="9" width="6" height="6"/>
                        <path d="M15 2v2"/>
                        <path d="M15 20v2"/>
                        <path d="M2 15h2"/>
                        <path d="M2 9h2"/>
                        <path d="M20 15h2"/>
                        <path d="M20 9h2"/>
                        <path d="M9 2v2"/>
                        <path d="M9 20v2"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Outdated Technology</h3>
                      <p className="text-gray-600 mt-1">
                        Aging tech stacks limit innovation and efficiency. We modernize your infrastructure with cutting-edge tools and methodologies.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Containerization & orchestration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Serverless architectures</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 mt-0.5 mr-2 text-nayvoh-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Observability platforms</span>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={500}>
              <div className="flex justify-center mt-10">
                <Button asChild variant="outline" className="group">
                  <Link to="/services" className="flex items-center">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
        {/* Services Section */}
        <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gray-100 relative">
          {/* Divider */}
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="w-24 h-1 bg-nayvoh-600 rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-gray-600">
                  We provide comprehensive solutions to modernize your infrastructure and streamline your development workflow.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => (
                <RevealOnScroll key={service.id} delay={index * 100}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={300}>
              <div className="flex justify-center mt-12">
                <Button asChild variant="outline" className="group">
                  <Link to="/services" className="flex items-center">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
        {/* Tools Section with Attractive Gradient and 3D Cards */}
        <section className="py-16 md:py-24 gradient-bg">
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  DevOps Tools
                </h2>
                <p className="text-lg text-white/80">
                  Explore the industry-leading tools and technologies we utilize to power your digital transformation.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="px-4 md:px-12 lg:px-20">
                <Slider {...sliderSettings}>
                  {tools.map((tool) => (
                    <div key={tool.id} className="px-2">
                      <ToolCard
                        name={tool.name}
                        description={tool.description}
                        category={tool.category}
                        iconType="react-icons"
                      />
                    </div>
                  ))}
                </Slider>

                <div className="flex justify-center mt-12">
                  <Button asChild variant="outline" className="group">
                    <Link to="/resources" className="flex items-center text-white bg-gray-900 ">
                      <span>View All Resources</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>


        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <RevealOnScroll>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-nayvoh-900 to-nayvoh-800 text-white  mix-blend-multiply"></div>
                    <img
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                      alt="DevOps Engineering"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-md">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          Modern Solutions for Modern Problems
                        </h3>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              <div className="lg:w-1/2">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Choose Nayvoh Tech?
                  </h2>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-nayvoh-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-nayvoh-600 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Expert Team
                        </h3>
                        <p className="text-gray-600">
                          Our team of certified professionals brings years of experience in DevOps and cloud technologies.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-nayvoh-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-nayvoh-600 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Tailored Solutions
                        </h3>
                        <p className="text-gray-600">
                          We create custom solutions specifically designed to meet your unique business requirements.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-nayvoh-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                        <span className="text-nayvoh-600 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          24/7 Support
                        </h3>
                        <p className="text-gray-600">
                          Our dedicated support team ensures your infrastructure runs smoothly around the clock.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="lg" className="bg-nayvoh-600 hover:bg-nayvoh-700">
                      <Link to="/about">Learn More About Us</Link>
                    </Button>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-nayvoh-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Infrastructure?
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Let's discuss how Nayvoh Tech can help optimize your development workflow and modernize your infrastructure.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-nayvoh-700 hover:bg-gray-200 hover:shadow-md">
                    <Link to="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </Button>
                  <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="relative overflow-hidden text-gray-100 bg-gray-900 border-2 border-white transition-all duration-500 ease-in-out
                    hover:text-white hover:bg-gradient-to-b hover:from-purple-800 hover:via-purple-800 hover:to-purple-900 hover:border-white
                    before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-t-2 before:border-l-2 before:border-white before:transition-all before:duration-500 before:ease-in-out
                    after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 after:border-b-2 after:border-r-2 after:border-white after:transition-all after:duration-500 after:ease-in-out
                    hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full
                  "
                >
                  <Link to="/services">
                  Explore Services
                  </Link>
                </Button>

                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>



      </main>

      <Footer />
    </>
  );
};

export default Index;
