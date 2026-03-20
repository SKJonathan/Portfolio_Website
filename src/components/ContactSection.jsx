function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="jskroppa@gmail.com"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium font-mono hover:bg-primary/90 transition-colors"
          >
            Say Hello
          </a>
          <a
            href="https://github.com/SKJonathan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border text-foreground px-8 py-3 rounded-lg font-medium font-mono hover:border-primary/50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanskr%C3%B8ppa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border text-foreground px-8 py-3 rounded-lg font-medium font-mono hover:border-primary/50 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="border-t border-border pt-8 text-muted-foreground text-sm font-mono">
          <p>Designed & built by <span className="text-primary">Jonathan Skrøppa</span></p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
