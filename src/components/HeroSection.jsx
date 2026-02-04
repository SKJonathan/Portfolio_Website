function Hero(){
    return (
        
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl font-bold mb-4">
              I'm <span className="text-primary">Jonathan Skrøppa</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Space Technologist | Software Developer | Dog Lover
            </p>
            <div className="flex justify-center gap-5">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium font-mono hover:bg-primary/90 transition-colors">
                View My Work
              </button>   
              <button className="bg-secondary border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium font-mono hover:bg-secondary/80 transition-colors">
                Download my resume
              </button>
            </div>  
          </div>
        </section>
    );
}

export default Hero; 