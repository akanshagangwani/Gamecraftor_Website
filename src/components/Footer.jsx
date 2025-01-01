import React, { useState } from 'react';
import { Link } from 'react-router-dom';
  /* Footer */

const Footer = () => {
  return (

    <footer id = "Footer" className="bg-white text-[#000000] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-0 mb-6 -ml-20 -mt-10">
              <img
                src="/src/assets/logo.png"
                alt="GameCraftor"
                className="h-16 w-16"
              />
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
              <p className="text-sm">
                2807 N Parham Rd Ste 320 #3710, Henrico, VA 23294
              </p>
              <p className="text-sm">
                Corporate Identity Number: xxxxxxxxxxxxxxxxxxxxx
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm">✉contact@synergim.com</p>
              <p className="text-sm">📞Call +1 804-569-5489</p>
            </div>
          </div>
          <p className="text-sm text-center mt-8">
            Synergim LLC. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;