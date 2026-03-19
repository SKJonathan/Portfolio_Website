function AboutMe(){
    return (
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
              A Bit <span className="text-primary">About Me</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16">
              The person behind the code
            </p>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer who loves building things for that can be used in the real world. 
                My journey started 6 years ago when I start my second year of collage, and 
                it evolved into a passion for creating projects with efficient solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                playing video games, cooking or exploring the world.
              </p>
              <p>
                I think I write clean and maintainable code.
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
        "Video Games",
        "Problem Solving",
        "Non stop Learning"
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

          </div>
        </section>


            );
}

export default AboutMe; 