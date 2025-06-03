import React from 'react';
import { Bus, ShoppingBag, Coins, Heart } from 'lucide-react';

const benefits = [
  {
    icon: <Bus className="w-12 h-12" />,
    title: "Descontos nos transportes",
    description: "Oferecemos descontos especiais para transporte público e aplicativos de mobilidade."
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: "Pague mais barato",
    description: "Promoções e descontos exclusivos em estabelecimentos parceiros."
  },
  {
    icon: <Coins className="w-12 h-12" />,
    title: "Acumule moedas sociais",
    description: "Participe de projetos e ganhe moedas para trocar por benefícios."
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Gentileza gera gentileza",
    description: "Ajude sua comunidade e torne a cidade um lugar melhor para todos."
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[#004643]/80 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#ffffff] text-4xl font-bold mb-4">
            <span className="text-[#f9bc60]">V</span>antagens
          </h2>
          <p className="text-[#abd1c6] text-xl">
            Descubra os benefícios de fazer parte da nossa comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#004643] p-6 rounded-lg border border-[#abd1c6]/20 hover:border-[#f9bc60] transition-all duration-300"
            >
              <div className="text-[#e8e4e6] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-[#ffffff] text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#abd1c6]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}