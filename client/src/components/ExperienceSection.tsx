
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Led development of enterprise applications using React and Node.js"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Developed and maintained client websites and applications"
    },
    {
      title: "Junior Developer",
      company: "StartUp Inc",
      period: "2018 - 2020",
      description: "Worked on frontend development using React and TypeScript"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"/>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 flex">
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="ml-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
