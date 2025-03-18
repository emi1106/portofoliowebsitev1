import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Strong academic foundation with a focus on technology and computational thinking.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-600 rounded-full text-white shadow-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="ml-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full md:w-[calc(100%-3rem)]">
                  <h3 className="text-xl font-semibold mb-2">Mathematics-Informatics</h3>
                  <p className="text-primary-600 font-medium mb-3">Intensive Informatics Specialization</p>
                  <p className="text-gray-600 mb-3">Advanced coursework in algorithms, data structures, and software development principles, providing a strong foundation for complex problem-solving.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Algorithms
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Data Structures
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Software Development
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
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
