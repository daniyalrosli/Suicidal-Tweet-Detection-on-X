import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white-600 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <Image
            src="/caretweet-logo.png" // Replace with your custom logo
            alt="CareTweet Logo"
            width={120}
            height={40}
          />
        <div className="space-x-6">
  <a href="#about" className="hover:text-black">About Us</a>
  <a href="#detect" className="hover:text-black">Detect Tweet</a>
</div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center py-16">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Welcome to CareTweet</h1>
        <p className="text-center text-lg mb-6">
          Detect and prevent suicidal tweets using AI-driven analysis. Help make social media a safer place for everyone.
          </p>
        </main>
      

      {/* Footer (optional) */}
      <footer className="text-center py-6 bg-blue-600 text-white">
        <p>&copy; 2024 CareTweet. All Rights Reserved.</p>
      </footer>
    </div>
  );
}