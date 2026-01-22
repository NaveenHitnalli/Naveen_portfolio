import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Target, Clock } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Location",
      description: "India"
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Backend & Full-Stack Development"
    },
    {
      icon: Clock,
      title: "Experience",
      description: "Multiple internships & projects"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Bio */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I am a passionate <strong className="text-foreground">Full Stack Developer</strong> with hands-on experience in 
                <strong className="text-primary"> Django, Flask, REST APIs</strong>, and the <strong className="text-secondary">MERN stack</strong>. 
                Skilled at building efficient backend systems, optimizing APIs, and creating user-friendly applications.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I thrive in <strong className="text-foreground">Agile environments</strong>, love debugging complex problems, 
                and enjoy solving real-world challenges with scalable software solutions. My experience spans across 
                multiple internships where I've contributed to full-stack development, backend optimization, and 
                automated reporting systems.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently seeking opportunities as a <strong className="text-primary">Backend Developer</strong> or 
                <strong className="text-secondary"> Full-Stack Developer</strong> where I can leverage my technical skills 
                in Python, JavaScript, and modern frameworks to build impactful applications.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 card-hover bg-card border-border">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Education Card */}
            <Card className="p-6 bg-gradient-secondary border-0 text-card-foreground">
              <h3 className="font-semibold text-lg mb-2">Education</h3>
              <div className="space-y-2">
                <p className="font-medium">MCA in Computer Applications</p>
                <p className="text-sm opacity-90">Basaveshwar Engineering College, Bagalkot (VTU)</p>
                <p className="text-sm opacity-90">2024 - 2026</p>
                <div className="flex items-center space-x-2 mt-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    GPA: 8.90/10
                  </span>
                </div>
              </div>
            </Card>

            

          </div>
        </div>


        

        {/* Core Strengths */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Problem Solving</h4>
              <p className="text-muted-foreground">Analytical thinking and systematic approach to complex challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Time Management</h4>
              <p className="text-muted-foreground">Efficient project delivery and meeting deadlines consistently</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Teamwork</h4>
              <p className="text-muted-foreground">Collaborative mindset with strong communication skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;