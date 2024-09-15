import { Item, Option } from '@crudmates/form-config';
import Label from './Label';

type Props = {
  item: Item;
  field: any;
  error: any;
  className?: string;
  options?: Option[];
};

const Select: React.FC<Props> = ({ field, error, item, className, options = [] }) => {
  return (
    <div className='mb-4'>
      <Label className='mb-1' item={item} />

      <select {...field} className={className}>
        <option value=''>Select {item.label}</option>
        {options?.map((option: Option, optionIndex: number) => (
          <option key={optionIndex} value={option.name}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className='text-red-500 text-sm'>{error.message}</span>}
    </div>
  );
};

export default Select;
