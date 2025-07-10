import { Cloud, Database, Terminal, Cog, Server, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Azure", "Azure DevOps", "AWS", "AKS", "Azure Blob Storage", "Azure Key Vault"],
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Tools & Platforms",
      icon: Cog,
      skills: ["Docker", "Kubernetes", "Git", "GitHub", "Terraform", "ARM/Bicep", "Azure Monitor"],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      title: "Scripting & Programming",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript", ".NET", "C#", "Shell Scripting", "Bash", "ABAP"],
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["Azure SQL Database", "Cosmos DB"],
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "Other Technologies",
      icon: Server,
      skills: ["Linux", "Azure PowerShell"],
      gradient: "from-secondary-glow to-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern cloud development and DevOps practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 glass-hover group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-glass border border-glass-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;