function ProjectCard({ project }) {
  return (
    <div 
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:scale-105 group"
    >
      
      {/* IMAGE */}
      <div className="w-full h-48 bg-secondary/50 overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>
      
      {/* CARD CONTENT */}
      <div className="p-6">
        
        {/* Header with title and links */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View GitHub repository"
              >
                🔗
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View live demo"
              >
                ↗️
              </a>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
      </div>
      
    </div>
  );
}

export default ProjectCard;