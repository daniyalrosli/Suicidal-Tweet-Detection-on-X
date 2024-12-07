"use client";

import { useState } from "react";
import Link from "next/link";

const Detect = () => {
  const [tweet, setTweet] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to handle tweet submission
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
        setResult(data.prediction); // assuming prediction is returned as 'Potentially Suicidal' or 'Non-Suicidal'
      } else {
        setResult(data.error || "Error occurred. Please try again.");
      }
    } catch {
      setResult("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Recommendation logic
  const renderRecommendations = () => {
    if (result === "Potentially Suicidal") {
      return (
        <div className="text-left bg-gray-800 p-6 rounded-lg mt-6">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">
            Recommended Actions
          </h3>
          <ul className="space-y-2">
            <li>📞 Contact a suicide prevention hotline:</li>
            <ul className="ml-6 list-disc text-blue-400">
              <li>
                <a
                  href="https://www.befrienders.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Befrienders Worldwide
                </a>
              </li>
              <li>
                <a
                  href="https://suicidepreventionlifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suicide Prevention Lifeline (USA)
                </a>
              </li>
            </ul>
            <li>💬 Talk to a trusted friend or family member.</li>
            <li>📅 Schedule an appointment with a mental health professional.</li>
          </ul>
        </div>
      );
    } else if (result === "Non-Suicidal") {
      return (
        <div className="text-left bg-gray-800 p-6 rounded-lg mt-6">
          <h3 className="text-2xl font-semibold text-green-500 mb-4">
            Wellness Tips
          </h3>
          <ul className="space-y-2">
            <li>🌱 Practice mindfulness through meditation or yoga.</li>
            <li>✍️ Start a gratitude journal to note positive moments daily.</li>
            <li>🤝 Engage in uplifting activities with loved ones.</li>
            <li>📖 Read books or listen to podcasts about mental wellness.</li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          CareTweet: Suicidal Ideation Detection
        </h1>
        <p className="text-center text-lg mb-12">
          Enter a tweet to detect potential suicidal ideation. The model
          classifies tweets as &apos;Suicidal&apos; or &apos;Non-Suicidal.&apos;
        </p>

        {/* Text Input Area */}
        <div className="max-w-lg mx-auto">
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="Enter tweet here..."
            className="w-full p-4 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          ></textarea>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Detecting..." : "Detect Tweet"}
          </button>
        </div>

        {/* Results Section */}
        <div className="mt-8 text-center">
          {result && (
            <div
              className={`text-2xl font-semibold ${
                result === "Potentially Suicidal"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              <p>
                {result === "Potentially Suicidal"
                  ? "Warning: Suicidal Ideation Detected"
                  : "No Suicidal Ideation Detected"}
              </p>
            </div>
          )}
        </div>

        {/* Recommendations Section */}
        {result && renderRecommendations()}

        {/* Home Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detect;