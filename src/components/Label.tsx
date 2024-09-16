import { Item, Option } from '@crudmates/form-config';
import React from 'react';

type LabelProps = {
  item: Item;
  className?: string;
  option?: Option;
};

const Label: React.FC<LabelProps> = ({ item, className, option }) => {
  return (
    <label
      htmlFor={option ? `${item.name}-${option.value}` : item.name}
      className={`block text-sm text-gray-700 font-[500] ${className}`}
    >
      {option ? option.label : item.label}
      {!option && item.validation?.required && item.label && (
        <span className='text-red-500'> *</span>
      )}
    </label>
  );
};

export default Label;
