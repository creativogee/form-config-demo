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
      htmlFor={option ? `${item.name}-${option.name}` : item.name}
      className={`block text-sm ${className}`}
    >
      {option ? option.label : item.label}
      {!option && item.validation?.required && <span className='text-red-500'> *</span>}
    </label>
  );
};

export default Label;
