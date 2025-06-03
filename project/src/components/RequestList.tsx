import React from 'react';
import RequestCard from './RequestCard';

const requests = [
  {
    title: "Ajuda com Compras",
    description: "Preciso de ajuda para fazer compras no supermercado. Tenho dificuldade de locomoção e seria ótimo ter alguém para me auxiliar.",
    category: "Assistência",
    location: "Cajuru, Curitiba",
    date: "2024-03-20",
    points: 500
  },
  {
    title: "Aulas de Tecnologia",
    description: "Gostaria de aprender a usar smartphone e redes sociais. Busco alguém paciente para me ensinar o básico.",
    category: "Educação",
    location: "Centro, Curitiba",
    date: "2024-03-21",
    points: 300
  },
  {
    title: "Companhia para Consulta",
    description: "Preciso de acompanhante para ir ao médico na próxima semana. A consulta é no Hospital das Clínicas.",
    category: "Saúde",
    location: "Batel, Curitiba",
    date: "2024-03-22",
    points: 400
  }
];

export default function RequestList() {
  return (
    <div className="min-h-screen bg-[#004643] pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-[#ffffff] text-3xl font-bold mb-4">Pedidos de Ajuda</h2>
          <p className="text-[#abd1c6] text-lg">
            Encontre pessoas que precisam da sua ajuda na comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request, index) => (
            <div key={index} className="bg-[#004643] border border-[#abd1c6]/20 rounded-lg p-6 hover:border-[#f9bc60] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#f9bc60]/20 text-[#f9bc60] px-3 py-1 rounded-full text-sm">
                  {request.category}
                </span>
                <span className="text-[#abd1c6] text-sm">{request.date}</span>
              </div>
              <h3 className="text-[#ffffff] text-xl font-semibold mb-2">{request.title}</h3>
              <p className="text-[#abd1c6] mb-4">{request.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-[#abd1c6] text-sm">{request.location}</div>
                <div className="text-[#f9bc60] font-semibold">{request.points} pontos</div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-[#f9bc60] text-[#001e1d] rounded-lg hover:bg-[#f9bc60]/90 transition-all duration-200">
                Ajudar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}