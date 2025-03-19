import React from 'react';
import { Languages } from 'lucide-react';

const LanguageSection = () => {
  const languages = [
    { name: 'Romanian', level: 'Native Speaker' },
    { name: 'German', level: 'C1 Level', certification: 'DSD Diploma' },
    { name: 'English', level: 'C2 Level', certification: 'Cambridge Diploma' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Languages className="w-8 h-8 mr-4 text-indigo-500" />
          <h2 className="text-3xl font-bold">Language Proficiency</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {languages.map((language) => (
            <div 
              key={language.name} 
              className="p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            >
              <Languages className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{language.level}</p>
              {language.certification && (
                <p className="text-sm text-indigo-500">{language.certification}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;