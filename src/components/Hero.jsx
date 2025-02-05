import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-40 pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Abdur Rahman</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Digital Marketing Expert
            </h2>
            <p className="text-gray-600 mb-8">
              Specializing in SEO, Social Media Marketing, Lead Generation, and more. Let's boost your online presence and drive results!
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Abdur Rahman - Digital Marketing Expert"
              className="rounded-lg shadow-xl"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
