import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          CareTweet: Detecting Suicidal Ideation on X with AI
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Harnessing AI to create a safer online environment.
        </p>
        <div className="flex gap-4">
        

<div className="flex gap-4">
  <Link
    href="/detect"
    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-lg"
  >
    Try our detection
  </Link>
</div>
        
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why CareTweet?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Real-time Analysis', 'Sentiment Analysis', 'Privacy-Focused', 'Mental Health Advocacy'].map(
            (feature) => (
              <div key={feature} className="bg-gray-700 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-8 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          How Does CareTweet Work?
        </h2>
        <div className="space-y-8">
          {[
            'Analyze tweets using NLP-based models.',
            'Classify tweets as Suicidal or Non-Suicidal.',
            'Provide actionable insights to mental health professionals.',
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-blue-500 text-3xl">{index + 1}.</div>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Reach Out to Us
        </h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white h-32"
          ></textarea>
          <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-md text-lg">
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        <p>© 2024 CareTweet. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;