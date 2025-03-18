
import React, { useState } from 'react';
import { Languages } from 'lucide-react';

const LanguageSection = () => {
  const languages = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'C++', level: 70 }
  ];

  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Languages className="w-8 h-8 mr-4 text-blue-600" />
          <h2 className="text-3xl font-bold">Language Proficiency</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {languages.map((lang) => (
            <div 
              key={lang.name}
              className="relative"
              onMouseEnter={() => setHoveredLanguage(lang.name)}
              onMouseLeave={() => setHoveredLanguage(null)}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{lang.name}</span>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: hoveredLanguage === lang.name ? `${lang.level}%` : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
