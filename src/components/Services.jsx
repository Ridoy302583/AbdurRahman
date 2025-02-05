import React from 'react';

const services = [
  {
    title: 'SEO',
    description: 'Boost your website's visibility and organic traffic with expert SEO strategies.',
    icon: 'bi-search',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand awareness across social platforms.',
    icon: 'bi-share',
  },
  {
    title: 'Lead Generation',
    description: 'Convert visitors into valuable leads and customers with proven techniques.',
    icon: 'bi-funnel',
  },
  {
    title: 'Email Marketing',
    description: 'Create compelling email campaigns that drive conversions and customer loyalty.',
    icon: 'bi-envelope',
  },
  {
    title: 'WordPress Development',
    description: 'Build stunning, responsive websites tailored to your business needs.',
    icon: 'bi-wordpress',
  },
  {
    title: 'Social Media Advertising',
    description: 'Reach your target audience with precision using Facebook, Instagram, and Google Ads.',
    icon: 'bi-badge-ad',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <i className={`bi ${service.icon} text-4xl text-indigo-600 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
