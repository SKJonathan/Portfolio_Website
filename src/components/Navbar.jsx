function Navbar({ setSidebarOpen, darkMode }) {
  return (
    <nav className="fixed top-0 w-full bg-card border-b border-border p-6 z-50">
      <div className="flex justify-between items-center">
        
        {/* Hamburger button */}
        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          className="text-2xl text-primary hover:text-primary/80 transition-colors"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="text-primary font-bold text-2xl font-mono">JS</div>

        {/* Nav links */}
        <div className="flex gap-6 text-primary font-bold">
          <a href="#home" className="hover:text-primary/80 transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-primary/80 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary/80 transition-colors">
            Skills
          </a>
          <a href="#about" className="hover:text-primary/80 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-primary/80 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;