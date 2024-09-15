import { Item } from '@crudmates/form-config';
import Label from './Label';

type Props = {
  field: any;
  error: any;
  item: Item;
  className?: string;
};

const Input: React.FC<Props> = ({ field, item, className, error }) => {
  return (
    <div className='mb-4'>
      <Label className='mb-1' item={item} />

      <input
        {...field}
        type={item.type}
        disabled={item.disabled}
        placeholder={item.placeholder}
        className={className}
      />
      {error && <span className='text-red-500 text-sm'>{error.message}</span>}
    </div>
  );
};

export default Input;
