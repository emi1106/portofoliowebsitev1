
import { Languages } from 'lucide-react';

const LanguageSection = () => {
  const languages = [
    { name: "Romanian", level: "Native", proficiency: 100 },
    { name: "German", level: "C1", proficiency: 90 },
    { name: "English", level: "C2", proficiency: 95 }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Language Proficiency</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform">
              <Languages className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center mb-4">{language.name}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 dark:bg-blue-900 text-blue-600 dark:text-blue-200">
                      {language.level}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                      {language.proficiency}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-900">
                  <div 
                    style={{ width: `${language.proficiency}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 dark:bg-blue-400 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
