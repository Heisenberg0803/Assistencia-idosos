import React from 'react';
import Button from './Button';

interface RequestCardProps {
  title: string;
  description: string;
  category: string;
}

export default function RequestCard({ title, description, category }: RequestCardProps) {
  return (
    <div className="bg-[#004643] border border-[#abd1c6]/20 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="text-sm text-[#f9bc60] mb-2">{category}</div>
      <h3 className="text-[#ffffff] text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#abd1c6] mb-4">{description}</p>
      <Button variant="secondary" className="w-full">
        Ver mais
      </Button>
    </div>
  );
}