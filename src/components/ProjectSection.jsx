function ProjectSection() {  
  const projects = [  
    {
      id: 1,
      title: "Template 1",
      description: "loren ipsom",
      tags: ["React", "HTML", "CSS"],
      github: "",
      demo: null
    },
    {
      id: 2,
      title: "Template 2",
      description: "loren ipsom",
      tags: ["React", "HTML", "Tailwind"],
      github: "",
      demo: null
    },
    {
      id: 3,
      title: "Template 3",
      description: "loren ipsom",
      tags: ["React", "Tailwind", "HTML"],
      github: "",
      demo: null
    },
    {
      id: 4,
      title: "Template 4",
      description: "loren ipsom",
      tags: ["React", "HTML", "Tailwind"],
      github: "https://github.com/yourusername/ecommerce",
      demo: null
    }
  ];
  return(
    
        <section id="projects" className="min-h-screen py-20 px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </section>

  );
  }
export default ProjectSection;  