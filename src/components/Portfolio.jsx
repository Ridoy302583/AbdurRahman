import React from 'react';

const projects = [
  {
    title: 'E-commerce SEO Boost',
    description: 'Increased organic traffic by 150% for an online retailer.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Social Media Campaign',
    description: 'Generated 10,000+ leads for a B2B SaaS company.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Email Marketing Revamp',
    description: 'Improved open rates by 35% and click-through rates by 50%.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1haWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" crossOrigin="anonymous" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
