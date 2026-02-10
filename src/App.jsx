import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/HeroSection';
import ProjectSection from './components/ProjectSection';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme class to document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Navbar setSidebarOpen={setSidebarOpen} darkMode={darkMode} />
      
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <main className="pt-20">
        <Hero />
        <ProjectSection></ProjectSection>
        


        <section id="skills" className="min-h-screen py-20 px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            My <span className="text-primary">Skills</span>
          </h2>
        </section>

        <section id="about" className="min-h-screen py-20 px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>
        </section>
      </main>
      
    </div>
  );
}

export default App;