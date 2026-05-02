import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
  title: "Data Science & AI/ML Intern",
  company: "ERA Foundation (MakeX Program)",
  period: "Feb 2026 - Present",
  location: "Hubballi ",
  description: "Developed an AI-powered shopping assistant using machine learning for personalized product recommendations and user interaction.",
  achievements: [
    "Built a recommendation system using content-based filtering to suggest products based on user preferences",
    "Performed data preprocessing, feature engineering, and exploratory data analysis (EDA)",
    "Implemented machine learning models using Python, improving recommendation relevance",
    "Utilized Pandas, NumPy, and Scikit-learn for data analysis and model development",
    "Designed a basic chatbot interface to enhance user experience and interaction"
  ],
  technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Data Analysis", "EDA", "NLP (basic)"]
},
    {
      title: "Web Development Intern (MERN)",
      company: "Infotact Solutions",
      period: "May 2025 - Aug 2025",
      location: "Bengaluru",
      description: "Built responsive websites, debugged code, and enhanced performance using React.js and Node.js.",
      achievements: [
        "Developed responsive web applications using MERN stack",
        "Implemented performance optimizations resulting in faster load times",
        "Collaborated with team on debugging and code reviews",
        "Enhanced user experience through improved frontend components"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Python Developer Intern",
      company: "A Plus Topper",
      period: "Nov 2024 - May 2025",
      location: "Bengaluru",
      description: "Developed backend modules, optimized SQL queries, and automated reporting with Python.",
      achievements: [
        "Built robust backend modules using Python frameworks",
        "Optimized database queries improving system performance by 40%",
        "Automated reporting processes reducing manual work",
        "Implemented efficient data processing solutions"
      ],
      technologies: ["Python", "Django", "SQL", "PostgreSQL", "REST APIs", "Data Analysis"]
    },
    {
      title: "Python Developer Intern",
      company: "Tech Fortune Technologies",
      period: "May 2024 - Jul 2024",
      location: "Bengaluru",
      description: "Full-stack development with Django/Flask and PostgreSQL, automated reports, and UI bug fixes.",
      achievements: [
        "Developed full-stack applications using Django and Flask",
        "Designed and implemented PostgreSQL database schemas",
        "Created automated reporting systems for data insights",
        "Fixed critical UI bugs improving user experience"
      ],
      technologies: ["Python", "Django", "Flask", "PostgreSQL", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Hands-on experience across multiple internships, building scalable applications and optimizing systems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className={`md:w-5/6 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                    <Card className="p-6 card-hover bg-card border-border">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-card-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-primary font-semibold mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              className="tech-badge"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;