"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Shield, Heart, Send, Loader2 } from "lucide-react";

const Detect = () => {
  const [tweet, setTweet] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (tweet.trim() === "") return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweet }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.prediction);
      } else {
        setResult(data.error || "Error occurred. Please try again.");
      }
    } catch {
      setResult("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderRecommendations = () => {
    if (result === "Potentially Suicidal") {
      return (
        <div className="animate-fade-in bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 p-8 rounded-2xl mt-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h3 className="text-2xl font-semibold text-red-400">
              Immediate Support Available
            </h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-red-300 mb-3">24/7 Crisis Support</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://www.befrienders.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-xl transition-all hover:scale-105"
                >
                  <Shield className="w-5 h-5 text-red-400" />
                  <span>Befrienders Worldwide</span>
                </a>
                <a
                  href="https://suicidepreventionlifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-xl transition-all hover:scale-105"
                >
                  <Heart className="w-5 h-5 text-red-400" />
                  <span>Suicide Prevention Lifeline</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-red-300 mb-3">Recommended Steps</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-lg">💬</span>
                  Reach out to a trusted friend or family member
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-lg">📅</span>
                  Schedule an appointment with a mental health professional
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-lg">🌟</span>
                  Remember: You are not alone in this journey
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (result === "Non-Suicidal") {
      return (
        <div className="animate-fade-in bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 p-8 rounded-2xl mt-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl font-semibold text-green-400">
              Wellness Resources
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { emoji: "🌱", title: "Mindfulness", desc: "Practice daily meditation or yoga" },
              { emoji: "✍️", title: "Journaling", desc: "Document your daily gratitude moments" },
              { emoji: "🤝", title: "Connection", desc: "Engage with supportive communities" },
              { emoji: "📖", title: "Learning", desc: "Explore mental wellness resources" }
            ].map((item) => (
              <div key={item.title} className="bg-gray-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-700/50 rounded-lg">
                    {item.emoji}
                  </span>
                  <h4 className="font-medium text-green-300">{item.title}</h4>
                </div>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Tweet Analysis
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enter a tweet below for analysis. Our AI model will assess the content
            and provide appropriate resources and recommendations.
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl backdrop-blur-sm">
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="Enter tweet content here..."
            className="w-full p-4 mb-6 h-32 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all resize-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading || tweet.trim() === ""}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 px-6 py-4 rounded-xl text-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Analyze Tweet
              </>
            )}
          </button>
        </div>

        {result && (
          <div className="animate-fade-in mt-8 text-center">
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${
                result === "Potentially Suicidal"
                  ? "bg-red-500/20 text-red-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {result === "Potentially Suicidal" ? (
                <AlertTriangle className="w-5 h-5" />
              ) : (
                <Heart className="w-5 h-5" />
              )}
              <span className="text-lg font-medium">
                {result === "Potentially Suicidal"
                  ? "Potential Risk Detected"
                  : "No Immediate Risk Detected"}
              </span>
            </div>
          </div>
        )}

        {renderRecommendations()}
      </div>
    </div>
  );
};

export default Detect;