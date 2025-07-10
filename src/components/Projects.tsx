import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cloud, Globe, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DevOps Case Study – Azure Based Deployment",
      description: "Comprehensive DevOps pipeline showcasing modern cloud deployment practices with containerization and monitoring.",
      icon: Cloud,
      features: [
        "Created and managed Dockerfiles using NGINX image to host website",
        "Automated CI/CD using Azure DevOps for application files", 
        "Used Azure CLI and Portal to retrieve and manage files",
        "Secured sensitive data using Azure Key Vault",
        "Deployed containerized apps with Docker & AKS",
        "Monitored app performance using Azure Monitor & Application Insights"
      ],
      technologies: ["Azure", "Docker", "Kubernetes", "Azure DevOps", "Azure Key Vault", "Azure Monitor"],
      gradient: "from-primary to-primary-glow",
      status: "Production"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with clean HTML/CSS and hosted on GitHub Pages.",
      icon: Globe,
      features: [
        "Responsive design for all device sizes",
        "Clean, modern UI/UX",
        "Optimized performance",
        "SEO friendly structure"
      ],
      technologies: ["HTML", "CSS", "GitHub Pages"],
      gradient: "from-secondary to-secondary-glow",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Dockerized Flask App",
      description: "Simple Python Flask API containerized with Docker and deployed to Azure cloud infrastructure.",
      icon: Zap,
      features: [
        "RESTful API endpoints",
        "Docker containerization",
        "Azure cloud deployment",
        "Automated testing pipeline"
      ],
      technologies: ["Python", "Flask", "Docker", "Azure"],
      gradient: "from-accent to-accent-glow",
      status: "Demo",
      githubUrl: "#"
    }
  ];

  const beginnerProjects = [
    {
      title: "CI/CD Pipeline Demo",
      description: "Sample Node.js application demonstrating Azure Pipelines integration with automated testing and deployment.",
      technologies: ["Node.js", "Azure Pipelines", "Jest", "Docker"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Infrastructure as Code Template",
      description: "ARM and Bicep templates for automated Azure resource provisioning with best practices and security configurations.",
      technologies: ["ARM Templates", "Bicep", "Azure CLI", "PowerShell"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      title: "Monitoring Dashboard Setup",
      description: "Custom Azure Monitor dashboard with Application Insights integration for real-time application performance tracking.",
      technologies: ["Azure Monitor", "Application Insights", "KQL", "Power BI"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      title: "Container Registry Automation",
      description: "Automated Docker image building and pushing to Azure Container Registry with vulnerability scanning integration.",
      technologies: ["Docker", "Azure Container Registry", "GitHub Actions", "Trivy"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "Backup & Recovery Solution",
      description: "Automated backup strategy for Azure resources with cross-region replication and disaster recovery testing.",
      technologies: ["Azure Backup", "Azure Site Recovery", "PowerShell", "Azure Automation"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            Project Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing DevOps expertise and cloud development skills
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 glass-hover group animate-slide-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-full h-full text-white" />
                </div>
                <Badge 
                  variant={project.status === 'Production' ? 'default' : project.status === 'Live' ? 'secondary' : 'outline'}
                  className="text-xs"
                >
                  {project.status}
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-glass border border-glass-border rounded text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-3 mt-auto">
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className={`bg-gradient-to-r ${project.gradient} hover:scale-105 transition-transform duration-300`}
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-glass-border bg-glass hover:bg-glass-hover hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Additional Projects Section */}
        <div className="glass rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            🚀 Additional Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beginnerProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-glass rounded-xl border border-glass-border overflow-hidden hover:bg-glass-hover group transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-background/50 border border-glass-border rounded text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;