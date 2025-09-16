import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8904912385",
      href: "tel:+918904912385"
    },
    {
      icon: Mail,
      label: "Email",
      value: "naviihitnalli@gmail.com",
      href: "mailto:naviihitnalli@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/naveen-hitnalli03/",
      color: "text-blue-600"
    },
    {
      name: "GitHub", 
      icon: Github,
      href: "https://github.com/naveenhitnalli",
      color: "text-gray-800 dark:text-gray-200"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate? I'm always interested in discussing new opportunities 
            and exciting projects. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently seeking opportunities as a Backend Developer or Full-Stack Developer. 
                Whether you have a project in mind, want to discuss potential collaborations, 
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href === "#" ? (
                      <p className="font-medium text-foreground">{info.value}</p>
                    ) : (
                      <a 
                        href={info.href}
                        className="font-medium text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors duration-200 group"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-primary border-0 text-white"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Professional CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-secondary border-0">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Open to Opportunities
            </h3>
            <p className="text-card-foreground/90 mb-6 max-w-2xl mx-auto">
              I'm actively seeking full-time opportunities as a Backend Developer or Full-Stack Developer. 
              If you're looking for a dedicated developer who's passionate about building great software, 
              let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
                asChild
              >
                <a href="mailto:naviihitnalli@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                asChild
              >
                <a href="https://www.linkedin.com/in/naveen-hitnalli03/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;