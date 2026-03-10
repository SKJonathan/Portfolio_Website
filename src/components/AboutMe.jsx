function AboutMe(){
    return (
        <section id="about" className="py-24 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Bit <span className="text-gradient">About Me</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer who loves building things for that can be used in the real world. 
                My journey started 6 years ago when I start my second year of collage, and 
                it evolved into a passion for creating projects with efficient solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating 
                experiences that make a difference. Every project is an 
                opportunity to learn and grow.
              </p>
            </div>

            <div className="bg-secondary glass rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-muted-foreground text-xs">developer.ts</span>
              </div>
              <pre className="text-muted-foreground overflow-x-auto">
                <code>
            {`const developer = {
    name: "Jonathan Skrøppa",
    role: "Full Stack Developer",
    location: "(UK, Aberystwyth), (Norway, Aalesund)" 
                    
    passions: [
        "Clean Code",
        "Open Source",
        "Problem Solving",
        "Continuous Learning"
    ],
                    
    currentFocus: "Bachelor Project",
                    
    funFact: () => {
        return "I've been part of a rocket launch";
    }
};`}
                </code>
              </pre>
            </div>
          </div>
          
          
        </section>


            );
}

export default AboutMe; 