import React, { ReactNode } from 'react';
import StatNumber from '../Atoms/StatNumber';
import CardTitle from '../Atoms/CardTitle';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-green-600 rounded-lg shadow-md p-6 text-white">
      <div className="flex flex-col items-center">
        <CardTitle title={title} />
        <StatNumber value={value} />
        {icon}
      </div>
    </div>
  );
};

export default StatCard;