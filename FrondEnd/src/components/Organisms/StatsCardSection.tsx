import React, { ReactNode } from 'react';
import StatCard from '../Molecules/StatCard';

interface StatsCardSectionProps {
  title?: string;
  cards: {
    title: string;
    value: number | string;
    icon: ReactNode;
  }[];
}

const StatsCardSection: React.FC<StatsCardSectionProps> = ({ title, cards }) => {
  return (
    <>
      {title && <h2 className="text-xl font-bold mb-4 border-b pb-2">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => (
          <StatCard 
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </div>
    </>
  );
};

export default StatsCardSection;