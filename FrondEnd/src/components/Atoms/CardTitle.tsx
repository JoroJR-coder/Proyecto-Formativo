import React from 'react';

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return <h2 className="text-lg font-semibold mb-2">{title}</h2>;
};

export default CardTitle;