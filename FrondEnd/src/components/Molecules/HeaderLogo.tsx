import React from 'react';
import Logo from '../Atoms/Logo';
import Title from '../Atoms/Title';

interface HeaderLogoProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoSrc, logoAlt, title }) => {
  return (
    <div className="flex items-center">
      <Logo src={logoSrc} alt={logoAlt} size="md" />
      <div className="ml-3">
        <Title text={title} />
      </div>
    </div>
  );
};

export default HeaderLogo;