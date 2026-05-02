import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Server, Wrench, Users, Zap, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL","next.js","vue.js"],
      color: "primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      skills: ["Django", "Flask", "FastAPI", "React.js", "Node.js", "Express.js"],
      color: "secondary"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      color: "primary"
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "Docker", "Supabase", "VS Code"],
      color: "secondary"
    },
    {
      title: "Professional Skills",
      icon: Users,
      skills: ["REST API Development", "Debugging", "Unit Testing", "Agile Development", "Code Reviews"],
      color: "primary"
    },
    {
      title: "Specializations",
      icon: Zap,
      skills: ["Backend Development", "Full-Stack Development", "API Integration", "Data Processing", "Automation"],
      color: "secondary"
    },
    {
      title: "Hardware & Digital Fabrication",
      icon: Cog,
      skills: ["Autodesk Fusion 360", "2D & 3D CAD Design", "3D Printing", "Laser Cutting & Engraving", "Automation","CNC Router","Basic Electrical Wiring","Agriculture Technology (AgriTech)"],
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    return color === "primary" 
      ? "bg-primary/10 text-primary border-primary/20" 
      : "bg-secondary/10 text-secondary border-secondary/20";
  };

  const getIconBg = (color: string) => {
    return color === "primary" ? "bg-primary/10" : "bg-secondary/10";
  };

  const getIconColor = (color: string) => {
    return color === "primary" ? "text-primary" : "text-secondary";
  };

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications from backend to frontend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 card-hover bg-card border-border">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${getIconBg(category.color)} mr-3`}>
                  <category.icon className={`h-6 w-6 ${getIconColor(category.color)}`} />
                </div>
                <h3 className="font-bold text-lg text-card-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className={`${getColorClasses(category.color)} text-sm font-medium`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Proficiency Highlight */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-secondary border-0 text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Core Expertise
            </h3>
            <p className="text-lg text-card-foreground/90 mb-6">
              Specializing in Python backend development with extensive experience in building RESTful APIs, 
              optimizing database queries, and creating scalable web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Python", "Django", "REST APIs", "PostgreSQL", "React.js", "Node.js"].map((skill) => (
                <Badge key={skill} className="bg-primary text-primary-foreground px-4 py-2 text-base font-semibold">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;