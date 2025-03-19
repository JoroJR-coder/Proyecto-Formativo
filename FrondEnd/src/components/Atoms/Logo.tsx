import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ src, alt, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14'
  };

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};

export default Logo;