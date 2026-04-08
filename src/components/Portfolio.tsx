import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Zap, Users, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Hyperlocal Service Marketplace",
      subtitle: "Urban Company Clone",
      description: "A comprehensive MERN full-stack application for booking and managing local services with real-time features, user authentication, and service provider management.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io", "JWT"],
      features: [
        "User & Service Provider Authentication",
        "Real-time Booking System",
        "Payment Integration",
        "Rating & Review System",
        "Admin Dashboard"
      ],
      icon: Users,
      color: "primary",
      github: "https://github.com/naveenhitnalli/hyperlocal-service-marketplace",
      demo: "#"
    },
    {
      title: "FastAPI Event Management System",
      subtitle: "Enterprise Backend Solution",
      description: "Robust backend system with JWT authentication, role-based access control, and comprehensive event management capabilities for enterprise use.",
      technologies: ["FastAPI", "PostgreSQL", "JWT", "SQLAlchemy", "Pydantic", "Docker"],
      features: [
        "JWT Authentication & Authorization",
        "Role-based Access Control",
        "Event CRUD Operations",
        "RESTful API Design",
        "Comprehensive Documentation"
      ],
      icon: Zap,
      color: "secondary",
      github: "https://github.com/NaveenHitnalli/Fastapi_event_management",
      demo: "#"
    },
    {
      title: "Stock Price Prediction Dashboard",
      subtitle: "Data Analysis & Visualization",
      description: "Interactive web application for stock market analysis featuring technical indicators, price predictions, and real-time data visualization using Python and Dash.",
      technologies: ["Python", "Dash", "Plotly", "yFinance", "Pandas", "NumPy"],
      features: [
        "Real-time Stock Data",
        "Technical Analysis Indicators",
        "Interactive Charts",
        "Price Prediction Models",
        "Responsive Dashboard"
      ],
      icon: TrendingUp,
      color: "primary",
      github: "https://github.com/NaveenHitnalli/Stock_price-pridication",
      demo: "#"
    }
  ];

  const getColorClasses = (color: string) => {
    return color === "primary" 
      ? { bg: "bg-primary/10", text: "text-primary", gradient: "from-primary/20 to-primary/5" }
      : { bg: "bg-secondary/10", text: "text-secondary", gradient: "from-secondary/20 to-secondary/5" };
  };

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development, backend systems, and data visualization through real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover bg-card border-border group">
              {/* Header with icon */}
              <div className={`p-6 bg-gradient-to-br ${getColorClasses(project.color).gradient}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(project.color).bg}`}>
                    <project.icon className={`h-6 w-6 ${getColorClasses(project.color).text}`} />
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-1">
                  {project.title}
                </h3>
                <p className={`text-sm font-medium ${getColorClasses(project.color).text}`}>
                  {project.subtitle}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-card-foreground mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-start">
                        <span className={`${getColorClasses(project.color).text} mr-2 font-bold`}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className={`flex-1 ${getColorClasses(project.color).bg} ${getColorClasses(project.color).text} hover:opacity-80`}
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-secondary border-0">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-card-foreground/90 mb-6">
              I'm constantly working on new projects and exploring cutting-edge technologies. 
              Check out my GitHub for more repositories and contributions.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              asChild
            >
              <a href="https://github.com/naveenhitnalli" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;