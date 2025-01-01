import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const BenefitCard = ({ headingText }) => (
  <div 
    className="p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 aspect-square flex items-center justify-center"
    style={{
      backgroundColor: headingText === "Reduced Costs" ? "#ff6b6b" :
                      headingText === "Unifies Workflow" ? "#ffa94d" :
                      headingText === "Supports Multilingual" ? "#ffd43b" :
                      headingText === "AI-Driven Templates" ? "#69db7c" :
                      headingText === "Custom Game Components" ? "#adb5bd" :
                      "#e64980",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      width: "325px",  // Adjust width
      height: "320px"  // Adjust height
    }}
  >
    <h3 
      className="text-3xl font-bold text-center"
      style={{
        color: headingText === "Reduced Costs" ? "#8D4646" :
               headingText === "Unifies Workflow" ? "#9A644B" :
               headingText === "Supports Multilingual" ? "#999B4D" :
               headingText === "AI-Driven Templates" ? "#468144" :
               headingText === "Custom Game Components" ? "#56575A" :
               headingText === "Playtesting" ? "#904c7c" :
               "#ffffff"
      }}
    >
      {headingText}
    </h3>
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
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(101deg, 
                white 30%,
                white 70%,
                
              )
            `
          }}
        />
        
        <div className="container mx-auto px-[-20] relative z-10">

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
          className="absolute inset-0 z-15 mb-30"
          style={{
            background: 'linear-gradient(174deg, white 20%, #9370DB 20%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-14 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white mt-40">
              <h2 className="text-4xl font-bold mb-5 ">Why GameCraftor?</h2>
              <p className="text-lg mb-5 ">
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
            <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg mx-auto mt-40">
              {/* Placeholder for future image */}
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default HomePage;