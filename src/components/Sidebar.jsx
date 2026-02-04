function Sidebar({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) {
  return (
    <>
      {/* Dark background when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        >
        </div>
      )}
      
      {/* The sidebar itself */}
      <div className={`
        fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-50
        transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        {/* Close button */}
        <button 
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-foreground hover:text-primary text-2xl transition-colors"
        >
          ✕
        </button>
        
        {/* Simple content */}
        <div className="p-6 mt-16">
          
          {/* THEME TOGGLE BUTTON */}
          <div className="mb-8">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-all"
            >
              <span className="font-medium text-foreground">
                {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </span>
              <div className={`w-12 h-6 rounded-full transition-colors relative ${
                darkMode ? 'bg-primary' : 'bg-muted'
              }`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  darkMode ? 'left-7' : 'left-1'
                }`}></div>
              </div>
            </button>
          </div>
          
          <h2 className="text-xl font-bold mb-4 text-foreground">
            PlaceHolder
          </h2>
          <p className="text-muted-foreground">
            It works! Ypppues
          </p>
        </div>
        
      </div>
    </>
  );
}

export default Sidebar;