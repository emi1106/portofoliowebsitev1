import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🎓 Education</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-blue-500 mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Strong academic foundation with a focus on technology and computational thinking. ✨</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-700 dark:from-blue-500 dark:to-blue-700 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-600 dark:bg-blue-600 rounded-full text-white shadow-lg"
                  style={{ animation: `float 3s ease-in-out infinite` }}
                >
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div 
                  className="ml-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full md:w-[calc(100%-3rem)]"
                  style={{ animation: `fadeIn 1s ease-in-out` }}
                >
                  <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">✨ Mathematics-Informatics</h3>
                  <p className="text-primary-600 dark:text-blue-400 font-medium mb-3">Intensive Informatics Specialization</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Advanced coursework in algorithms, data structures, and software development principles, providing a strong foundation for complex problem-solving.</p>
                  <div className="flex flex-wrap gap-2">
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-blue-900/30 text-primary-800 dark:text-blue-300"
                      style={{ animation: `float 3s ease-in-out infinite` }}
                    >
                      Algorithms
                    </span>
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-blue-900/30 text-primary-800 dark:text-blue-300"
                      style={{ animation: `float 3.4s ease-in-out infinite` }}
                    >
                      Data Structures
                    </span>
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-blue-900/30 text-primary-800 dark:text-blue-300"
                      style={{ animation: `float 3.8s ease-in-out infinite` }}
                    >
                      Software Development
                    </span>
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-blue-900/30 text-primary-800 dark:text-blue-300"
                      style={{ animation: `float 4.2s ease-in-out infinite` }}
                    >
                      Mathematics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
