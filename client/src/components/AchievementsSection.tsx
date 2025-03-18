import { Award } from 'lucide-react';
import { achievementData } from '../data/portfolioData';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Recognition for excellence in innovation, technology, and academic pursuits.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievementData.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col transform hover:-translate-y-1 duration-300"
            >
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-700 rounded-full mb-6">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <span className="text-primary-600 font-medium">{achievement.year}</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {index === 2 ? 'Education' : 'Recent'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
