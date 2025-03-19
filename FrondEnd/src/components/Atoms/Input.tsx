import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type?: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  className = '',
  placeholder = '',
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value === undefined ? '' : value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
    />
  );
};

export default Input;