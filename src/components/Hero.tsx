import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/naveen-profile.jpeg';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // In a real implementation, this would download the actual resume
     const link = document.createElement("a");
     link.href = "/Naveen_Hitnalli_Resume_2025.pdf"; // path in public folder
     link.download = "Naveen_Hitnalli_Resume_2025.pdf"; // optional: force download name
     link.click();
    console.log('Resume download triggered');
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-max">
          <div className="animate-fade-in-up">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Naveen Hitnalli"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-large animate-float"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Naveen Hitnalli</span>
              <span className="block text-secondary-light text-2xl md:text-3xl lg:text-4xl font-medium mt-2">
                Python Full Stack Developer
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Backend Developer | MERN Enthusiast
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Building scalable web applications with Django, Flask, REST APIs, and the MERN stack. 
              Passionate about creating efficient backend systems and solving real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              

              <Button
                onClick={handleResumeDownload}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >  <a
  href="/Naveen_Hitnalli_Resume_2025.pdf"   // 👈 must match file name in public/
  download
  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg flex items-center justify-center rounded-md"
></a>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/naveen-hitnalli03/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/naveenhitnalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:naviihitnalli@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6 text-white/60 hover:text-white transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;