import React from "react";
import Link from "next/link";
import { Brain, Lock, Heart, ArrowRight, MessageCircle, Activity, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            CareTweet
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-gray-200">
            Detecting Suicidal Ideation on X with AI
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Using advanced artificial intelligence to create a safer online environment and support mental health professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/detect"
              className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-medium shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-105"
            >
              Try Detection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#features"
              className="bg-gray-700/50 hover:bg-gray-700 px-8 py-4 rounded-lg text-lg font-medium backdrop-blur-sm transition-all hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-blue-500">CareTweet</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Real-time Analysis",
                icon: Activity,
                description:
                  "Process and analyze social media content instantly using state-of-the-art AI models.",
              },
              {
                title: "Advanced NLP",
                icon: Brain,
                description:
                  "Leverage sophisticated natural language processing to understand complex emotional contexts.",
              },
              {
                title: "Privacy First",
                icon: Lock,
                description:
                  "Enterprise-grade security and privacy measures to protect sensitive data.",
              },
              {
                title: "Professional Support",
                icon: Heart,
                description:
                  "Empower mental health professionals with actionable insights and early detection.",
              },
            ].map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="bg-blue-500/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How CareTweet <span className="text-blue-500">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: MessageCircle,
                title: "Content Analysis",
                description: "Advanced NLP models process social media content in real-time",
              },
              {
                icon: Brain,
                title: "Risk Assessment",
                description: "AI classifies content and identifies potential risk patterns",
              },
              {
                icon: Users,
                title: "Professional Insights",
                description: "Provides actionable data to mental health professionals",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500/10 p-6 rounded-full mb-6">
                    <Icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/4 right-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <form className="space-y-6">
            {[
              { type: "text", placeholder: "Your Name" },
              { type: "email", placeholder: "Your Email" },
            ].map((input) => (
              <input
                key={input.type}
                type={input.type}
                placeholder={input.placeholder}
                className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-6 py-4 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© 2024 CareTweet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;