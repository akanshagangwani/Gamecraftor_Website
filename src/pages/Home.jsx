import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const BenefitCard = ({ headingText }) => (
  <div 
    className="p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 aspect-square flex items-center justify-center"
    style={{
      backgroundColor: headingText === "Reduced Costs" ? "#ff6b6b" :
                      headingText === "Unifies Workflow" ? "#ffa94d" :
                      headingText === "Supports Multilingual" ? "#ffd43b" :
                      headingText === "AI-Driven Templates" ? "#69db7c" :
                      headingText === "Custom Game Components" ? "#adb5bd" :
                      "#e64980",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }}
  >
    <h3 className="text-2xl font-semibold text-gray-800 text-center">{headingText}</h3>
  </div>
);

const benefitsGrid = [
  { headingText: "Reduced Costs" },
  { headingText: "Unifies Workflow" },
  { headingText: "Supports Multilingual" },
  { headingText: "AI-Driven Templates" },
  { headingText: "Custom Game Components" },
  { headingText: "Playtesting" },
];

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePath] = useState('/src/assets/demoimage.jpeg');
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [secondImagePath] = useState('/src/assets/secondimage.jpeg');

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, [imagePath]);

  useEffect(() => {
    const img = new Image();
    img.src = secondImagePath;
    img.onload = () => setSecondImageLoaded(true);
    img.onerror = () => setSecondImageLoaded(false);
  }, [secondImagePath]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* First Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/src/assets/homebg1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-20">
            <div className="flex flex-col items-center">
              {imageLoaded ? (
                <div className="w-full max-w-3xl aspect-video rounded-lg shadow-lg mb-12 overflow-hidden my-10">
                  <img 
                    src={imagePath}
                    alt="Demo content"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full max-w-4xl aspect-video bg-white rounded-lg shadow-lg mb-12">
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Welcome to GameCraftor
              </h1>
              <button className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-12 py-3 rounded-full transition-colors my-6">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section with Blue Gradient */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(-174deg, #5AC4FF 80%, white 80%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-0 pb-24 flex items-center justify-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full flex justify-center">
              {secondImageLoaded ? (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg">
                  <img 
                    src={secondImagePath} 
                    alt="Second Demo content" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg"></div>
              )}
            </div>
            
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold mb-6">What is GameCraftor?</h2>
              <p className="text-lg text-justify leading-relaxed">
                GameCraftor is an innovative board game design application that enables users to create, modify, and test their game ideas seamlessly. With an intuitive interface and powerful features, GameCraftor streamlines the entire process from ideation to production.
              </p>
              <p className="text-lg text-justify leading-relaxed">
                With GameCraftor, you can dive right into designing new games from scratch, edit and fine-tune existing ones, or rigorously test your ideas through immersive simulations. We're here to make sure your creative journey from concept to physical production is smooth and satisfying.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section with Diagonal Background */}
      <div className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(171deg, 
                white 30%,
                white 70%,
                
              )
            `
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefitsGrid.map((benefit, index) => (
              <BenefitCard {...benefit} key={`benefit-${index}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Third Section with Purple Gradient */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(174deg, white 20%, #9370DB 20%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white mt-12">
              <h2 className="text-4xl font-bold mb-6">Why GameCraftor?</h2>
              <p className="text-lg mb-6">
                What sets us apart is our focus on enhancing both creativity and efficiency.
              </p>
              <ul className="space-y-3 text-lg">
                <li>- Create new game designs from scratch</li>
                <li>- Edit and fine-tune existing designs</li>
                <li>- Test gameplay dynamics with real-time simulations</li>
                <li>- Export game files</li>
                <li>- Order hard copies through trusted vendors</li>
              </ul>
            </div>
            <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg mx-auto mt-12">
              {/* Placeholder for future image */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-[#000000] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-0 mb-6 -ml-20 -mt-10">
                <img src="/src/assets/logo.png" alt="GameCraftor" className="h-16 w-16" />
                <span className="text-black font-bold text-2xl">GameCraftor</span>
              </div>
              <p className="text-md">Follow Us</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="hover:opacity-80">
                  <img 
                    src="/src/assets/facebook_icon.png" 
                    alt="Facebook" 
                    className="h-6 w-6"
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <img 
                    src="/src/assets/youtube_icon.png" 
                    alt="YouTube" 
                    className="h-6 w-6"
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <img 
                    src="/src/assets/linkedin_icon.png" 
                    alt="LinkedIn" 
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm">Introduction</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p className="text-sm">Contact here</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <p className="text-sm">T&C</p>
              <p className="text-sm">Privacy Policy</p>
            </div>
          </div>
          <div className="border-t border-[#9370DB]/20 mt-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm">Synergim LLC Private Limited</p>
                <p className="text-sm">Registered office:</p>
                <p className="text-sm">2807 N Parham Rd Ste 320 #3710, Henrico, VA 23294</p>
                <p className="text-sm">Corporate Identity Number: xxxxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="text-right">
                <p className="text-sm">✉contact@synergim.com</p>
                <p className="text-sm">📞Call +1 804-569-5489</p>
              </div>
            </div>
            <p className="text-sm text-center mt-8">Synergim LLC. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;