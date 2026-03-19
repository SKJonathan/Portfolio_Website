import ProjectCard from './ProjectCard';
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
      github: "",
      demo: null
    }
  ];
  return(
    
    <section id="projects" className="min-h-screen py-20 px-2">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4"> 
                Featured Projects
            </h2>

            <p className="text-center text-muted-foreground mb-12">
                here are some of my projects I've worked on!
            </p>

            <div className="grid md:grid-cols-2 gap-8 justify-between">
                {projects.map((project) => ( 
                    <ProjectCard key={project.id} project={project}></ProjectCard>

                ))}
            </div>
        </div>
    </section>

   );
}

export default ProjectSection;  