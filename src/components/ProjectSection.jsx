import ProjectCard from './ProjectCard';
function ProjectSection() {  
  const projects = [  
    {
      id: 1,
      title: "YellowCarGame",
      description: "A computer vision assignment that detects cars in images and determines whether they are yellow or not.",
      tags: ["Python", "Computer Vision"],
      github: "https://github.com/SKJonathan/YellowCarGame",
      demo: null,
      image: `${import.meta.env.BASE_URL}YellowCarImage.png`
    },
    {
      id: 2,
      title: "Auto Labeling Tool",
      description: "My Bachelor Project: An ML backend that connects to Label Studio and automatically pre-labels images — supporting both image classification (ResNet-50) and object detection (Faster R-CNN), switchable via config.",
      tags: ["Docker", "Python", "PyTorch", "TorchVision (Faster R-CNN / ResNet-50)", "Label Studio ML SDK"],
      github: "https://github.com/SKJonathan/Bachelor-Auto_Labeling_Tool",
      demo: null,
      image: `${import.meta.env.BASE_URL}BachelorImage.png`
    },
    {
      id: 3,
      title: "PitwallOne website",
      description: "A Formula 1 based website, that uses api's to get data and show statistic in various ways. From 2026 seasons stats, to next race information, head to head stats, F1.5 standings.",
      tags: ["React", "Vue", "TailwindCSS"],
      github: "https://github.com/SKJonathan/PitWallOne",
      demo: "https://pitwallone-po7q.onrender.com/"
    },
    {
      id: 4,
      title: "Coming soon",
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