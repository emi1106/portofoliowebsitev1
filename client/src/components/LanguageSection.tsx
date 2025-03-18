import { Languages } from 'lucide-react';
import { languageData } from '../data/portfolioData';

const LanguageSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Language Proficiency</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Fluent in multiple languages, enabling effective communication across different cultures and contexts.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {languageData.map((language, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mb-6">
                  <Languages className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
                <div className="text-primary-700 font-medium mb-2">{language.level}</div>
                <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                  <div 
                    className="bg-primary-600 h-2 rounded-full" 
                    style={{ width: language.proficiency }}
                  ></div>
                </div>
                {language.certification && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {language.certification}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
