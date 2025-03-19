import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-xl font-bold text-gray-800">{text}</h1>;
};

export default Title;