import React from 'react';
import { Ticket, ShoppingBag, Gift } from 'lucide-react';

const categories = [
  {
    title: "Ingressos",
    icon: <Ticket className="w-6 h-6" />,
    items: [
      {
        name: "Ingresso Cinema",
        points: 1500,
        image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg"
      },
      {
        name: "Show Nacional",
        points: 5000,
        image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
      },
      {
        name: "Teatro Municipal",
        points: 2000,
        image: "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg"
      }
    ]
  },
  {
    title: "Descontos",
    icon: <ShoppingBag className="w-6 h-6" />,
    items: [
      {
        name: "30% Supermercado",
        points: 3000,
        image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg"
      },
      {
        name: "50% Farmácia",
        points: 4000,
        image: "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg"
      },
      {
        name: "20% Lojas Parceiras",
        points: 2500,
        image: "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg"
      }
    ]
  },
  {
    title: "Produtos",
    icon: <Gift className="w-6 h-6" />,
    items: [
      {
        name: "Cesta Básica",
        points: 8000,
        image: "https://images.pexels.com/photos/6697294/pexels-photo-6697294.jpeg"
      },
      {
        name: "Kit Roupas",
        points: 6000,
        image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg"
      },
      {
        name: "Acessórios",
        points: 3500,
        image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg"
      }
    ]
  }
];

export default function BenefitsCatalog() {
  return (
    <div className="min-h-screen bg-[#004643] pt-20 px-4">
      <div className="max-w-7xl mx-auto">
       
        <div className="fixed top-20 left-4 bg-[#f9bc60] text-[#001e1d] p-4 rounded-lg shadow-lg z-40">
          <p className="font-bold text-lg">Seus Pontos</p>
          <p className="text-2xl font-bold">12.500</p>
        </div>

      
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              {category.icon}
              <h2 className="text-[#ffffff] text-2xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-[#004643] border border-[#abd1c6]/20 rounded-lg overflow-hidden hover:border-[#f9bc60] transition-all duration-300"
                >
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-[#ffffff] text-xl font-semibold mb-2">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-[#abd1c6]">{item.points} pontos</p>
                      <button className="px-4 py-2 bg-[#f9bc60] text-[#001e1d] rounded-lg hover:bg-[#f9bc60]/90 transition-all duration-200">
                        Resgatar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}