import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, Globe, Zap, Cog, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust APIs, database design, and server-side logic using Django, Flask, and FastAPI.",
      features: [
        "REST API Development",
        "Database Optimization",
        "Authentication Systems",
        "Performance Monitoring"
      ],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Full-Stack Web Applications",
      description: "End-to-end development using MERN stack or Django + React for complete web solutions.",
      features: [
        "React.js Frontend",
        "Node.js/Django Backend",
        "Database Integration",
        "Responsive Design"
      ],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "API Integration & Deployment",
      description: "Seamless third-party integrations and deployment strategies for scalable applications.",
      features: [
        "Third-party APIs",
        "Cloud Deployment",
        "CI/CD Pipelines",
        "System Integration"
      ],
      color: "primary"
    },
    {
      icon: Cog,
      title: "Automation & Optimization",
      description: "Streamlining processes through automation scripts and performance optimization.",
      features: [
        "Automated Reporting",
        "Data Processing",
        "Performance Tuning",
        "Script Development"
      ],
      color: "secondary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getColorClasses = (color: string) => {
    return color === "primary" 
      ? { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" }
      : { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" };
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 card-hover bg-card border-border group">
              <div className="flex items-start mb-6">
                <div className={`p-4 rounded-xl ${getColorClasses(service.color).bg} mr-4`}>
                  <service.icon className={`h-8 w-8 ${getColorClasses(service.color).text}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className={`h-4 w-4 mr-2 ${getColorClasses(service.color).text}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className={`group-hover:${getColorClasses(service.color).bg} group-hover:${getColorClasses(service.color).text} group-hover:border-transparent transition-all duration-200`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-secondary border-0">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-card-foreground/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with efficient, scalable solutions 
              tailored to your specific needs.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;