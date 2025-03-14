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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ToolCard from "@/components/ToolCard";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nayvoh Technologies | DevOps & Cloud Solutions</title>
        <meta
          name="description"
          content="Nayvoh Technologies provides expert DevOps, cloud infrastructure, and microservices solutions for the modern software industry."
        />
      </Helmet>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-gray-600">
                  We provide comprehensive solutions to modernize your
                  infrastructure and streamline your development workflow.
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

        {/* Tools Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  DevOps Tools
                </h2>
                <p className="text-lg text-gray-600">
                  Explore the industry-leading tools and technologies we
                  utilize to power your digital transformation.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="px-4 md:px-12 lg:px-20">
                <Carousel
                  className="w-full"
                  opts={{
                    loop: true,
                    align: "start",
                    skipSnaps: false,
                    dragFree: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                  }}
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {tools.map((tool) => (
                      <CarouselItem
                        key={tool.id}
                        className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                      >
                        <div className="p-1">
                          <ToolCard
                            name={tool.name}
                            description={tool.description}
                            category={tool.category}
                            iconType="react-icons"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-8 gap-4">
                    <CarouselPrevious className="relative static left-auto right-auto mr-2" />
                    <CarouselNext className="relative static right-auto left-auto" />
                  </div>
                </Carousel>

                <div className="flex justify-center mt-12">
                  <Button asChild variant="outline" className="group">
                    <Link to="/tools" className="flex items-center">
                      <span>View All Tools</span>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-nayvoh-600 to-nayvoh-800 opacity-90 mix-blend-multiply"></div>
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
                    Why Choose Nayvoh Technologies?
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
                          Our team of certified professionals brings years of
                          experience in DevOps and cloud technologies.
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
                          We create custom solutions specifically designed to
                          meet your unique business requirements.
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
                          Our dedicated support team ensures your infrastructure
                          runs smoothly around the clock.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      asChild
                      size="lg"
                      className="bg-nayvoh-600 hover:bg-nayvoh-700"
                    >
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
                  Let's discuss how Nayvoh Technologies can help optimize your
                  development workflow and modernize your infrastructure.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-nayvoh-700 hover:bg-gray-100"
                  >
                    <Link to="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-white bg-gray-900 hover:text-nayvoh-700 hover:border-white hover:bg-white"
                  >
                    <Link to="/services">
                      <span>Explore Services</span>
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
