import { CheckCircle, Lightbulb, Users, Wrench } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: Lightbulb,
      title: "Good problem solver",
      description: "Analytical mindset with creative solutions to complex technical challenges",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Wrench,
      title: "Hands-on with Azure and DevOps tools",
      description: "Extensive practical experience with cloud platforms and automation tools",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: Users,
      title: "Strong communication and collaboration skills",
      description: "Effective team player with excellent interpersonal abilities",
      gradient: "from-accent to-accent-glow"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about cloud technologies and automation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Profile Summary */}
          <div className="glass rounded-2xl p-8 mb-12 glass-hover animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-primary mr-4 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Profile Summary</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Energetic and skilled Azure Developer with solid experience in DevOps practices, CI/CD pipelines, 
              and cloud infrastructure. Proficient in containerization, automation, scripting, and monitoring 
              with a strong problem-solving mindset. Passionate about coding and delivering optimized, 
              maintainable solutions that drive business value and innovation.
            </p>
          </div>
          
          {/* Core Strengths */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
              🧩 Core Strengths
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 glass-hover group animate-slide-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${strength.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <strength.icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {strength.title}
                    </h4>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Personal Philosophy */}
          <div className="glass rounded-2xl p-8 glass-hover animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-accent to-accent-glow flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Approach</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest cloud technologies. 
                My goal is to create robust, scalable solutions that not only meet current requirements 
                but also adapt to future needs. I'm committed to writing clean, maintainable code and 
                following best practices in DevOps and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;