import { useState } from 'react';
import { Mail, ExternalLink, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">📬 Let's Work Together</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-blue-500 mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">I'm always interested in hearing about new projects and opportunities. ✨</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-gray-100">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Have a project in mind or want to discuss potential opportunities? Reach out through any of the channels below.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-blue-900/30 text-primary-600 dark:text-blue-400 rounded-full mr-4"
                  style={{ animation: `float 3s ease-in-out infinite` }}
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-1">Email</h4>
                  <a href="mailto:contact@example.com" className="text-primary-600 dark:text-blue-400 hover:text-primary-800 dark:hover:text-blue-300 transition-colors">contact@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-blue-900/30 text-primary-600 dark:text-blue-400 rounded-full mr-4"
                  style={{ animation: `float 3.5s ease-in-out infinite` }}
                >
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-blue-400 hover:text-primary-800 dark:hover:text-blue-300 transition-colors">linkedin.com/in/yourprofile</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary-100 dark:bg-blue-900/30 text-primary-600 dark:text-blue-400 rounded-full mr-4">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-1">GitHub</h4>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-blue-400 hover:text-primary-800 dark:hover:text-blue-300 transition-colors">github.com/yourusername</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 dark:text-gray-100">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-500 focus:border-primary-500 dark:focus:border-blue-500" 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-500 focus:border-primary-500 dark:focus:border-blue-500" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-blue-500 focus:border-primary-500 dark:focus:border-blue-500" 
                    placeholder="What can I help you with?"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-blue-500 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
