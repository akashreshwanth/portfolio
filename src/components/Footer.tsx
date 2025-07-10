import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="py-12 relative">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-glow opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-primary animate-glow-pulse"></div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            Akash Reshwanth
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Azure Developer & DevOps Engineer passionate about cloud technologies and automation.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-glass border border-glass-border flex items-center justify-center hover:bg-glass-hover group transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-glass-border">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              © {currentYear} Akash Reshwanth. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              and passion for technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;