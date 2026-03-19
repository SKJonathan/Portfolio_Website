function Skills() {
  // Your skills organized by category
  const skillsData = {
    languages: {
      title: "Languages",
      icon: "",
      skills: ["JavaScript", "Python", "C#", "Java", "Kotlin", "C++"]
    },
    frontend: {
      title: "Frontend",
      icon: "",
      skills: ["React", "Vue", "TailwindCSS", "HTML/CSS"]
    },
    backend: {
      title: "Backend",
      icon: "",
      skills: ["SQLite", "PostgreSQL"]
    },
    tools: {
      title: "Tools & DevOps",
      icon: "",
      skills: ["Git", "Docker","Linux", "Arduino"]
    }
  };
  
  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        
        {/* Section heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-16">
          Technologies I work with and love to explore
        </p>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([key, category]) => (
            <div 
              key={key}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-primary">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <span className="text-primary">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Skills;