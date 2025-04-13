import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🚀 Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-blue-500 mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A selection of my recent work, showcasing a range of technologies and design approaches. ✨</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-12 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">✨ Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Exciting projects are in development. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;