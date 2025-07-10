import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download functionality
    window.open('/resume.pdf', '_blank');
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/akashreshwanth",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/akashreshwanth",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:akashreshwanth2002@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary-glow to-accent-glow opacity-15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="glass rounded-3xl p-12 max-w-4xl mx-auto glass-hover animate-slide-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary animate-glow-pulse"></div>
          
          <h1 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary-glow via-secondary-glow to-accent-glow bg-clip-text text-transparent animate-fade-in">
            Akash Reshwanth
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Azure Developer & DevOps Engineer
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Energetic and skilled Azure Developer with solid experience in DevOps practices, CI/CD pipelines, and cloud infrastructure. 
            Passionate about coding and delivering optimized, maintainable solutions.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>akashreshwanth2002@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>9392981986</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-to-r hover:from-primary-glow hover:to-secondary-glow text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-glass-border bg-glass hover:bg-glass-hover text-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-4 glass-hover group transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-muted group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;