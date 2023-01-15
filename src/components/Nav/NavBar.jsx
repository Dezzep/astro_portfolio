import React from 'react';
import NavLinks from './NavLinks.jsx';

export default function NavBar(props) {
  return (
    <div className="bg-black/80 sticky top-0 z-50">
      <div className="py-6 sticky top-0 bg-[#AB09EB]/10">
        <div className="relative container flex justify-between  mx-auto px-8  w-full">
          <a
            href="/"
            className="text-purpMain-50 text-xl md:text-3xl font-bold hover:text-purple-700"
          >
            JH
          </a>
          <div className="flex space-x-12 items-center">
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
