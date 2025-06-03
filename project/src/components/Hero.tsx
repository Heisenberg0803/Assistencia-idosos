import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#004643] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[#ffffff] text-5xl md:text-6xl font-bold mb-6">
          Companhia Dourada
        </h1>
        <p className="text-[#abd1c6] text-xl mb-8">
          Transformando vidas através da solidariedade e conexão comunitária. 
          Junte-se a nós nessa jornada de fazer a diferença.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/login')}>Começar Agora</Button>
          <Button variant="secondary">Saiba Mais</Button>
        </div>
      </div>
    </section>
  );
}