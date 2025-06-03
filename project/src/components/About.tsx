import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-[#004643]/90 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#ffffff] text-4xl font-bold mb-6">
              <span className="text-[#f9bc60]">Q</span>uem somos nós
            </h2>
            <p className="text-[#abd1c6] text-lg leading-relaxed">
              Somos uma organização dedicada a criar conexões significativas em nossa comunidade. 
              Acreditamos no poder da gentileza e da solidariedade para transformar vidas e 
              construir uma sociedade mais acolhedora e inclusiva.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img 
              src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg"
              alt="Pessoas se ajudando"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}