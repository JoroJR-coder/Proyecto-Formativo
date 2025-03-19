import React from 'react';

interface StatNumberProps {
  value: number | string;
}

const StatNumber: React.FC<StatNumberProps> = ({ value }) => {
  return <p className="text-3xl font-bold mb-2">{value}</p>;
};

export default StatNumber;