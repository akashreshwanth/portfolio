import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akashreshwanth2002@gmail.com",
      href: "mailto:akashreshwanth2002@gmail.com",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9392981986",
      href: "tel:+919392981986",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      gradient: "from-accent to-accent-glow"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/akashreshwanth",
      username: "@akashreshwanth"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/akashreshwanth",
      username: "Akash Reshwanth"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-glow opacity-15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next cloud project? Let's connect and build something amazing together.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 glass-hover animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} p-3 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass rounded-2xl p-8 glass-hover animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Follow Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-glass rounded-xl border border-glass-border hover:bg-glass-hover group transition-all duration-300 hover:scale-105"
                  >
                    <social.icon className="w-6 h-6 text-muted group-hover:text-primary transition-colors duration-300 mr-4" />
                    <div>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass border-glass-border glass-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-glass border-glass-border focus:border-primary transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-glass border-glass-border focus:border-primary transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-glass border-glass-border focus:border-primary transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-glass border-glass-border focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or question..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-primary hover:bg-gradient-to-r hover:from-primary-glow hover:to-secondary-glow text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;