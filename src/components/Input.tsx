import { Item } from '@crudmates/form-config';
import Label from './Label';
import { cls } from './util';

type Props = {
  field: any;
  error: any;
  item: Item;
  wrapperClassName?: string;
  className?: string;
  tabIndex?: number;
};

const Input: React.FC<Props> = ({ field, item, wrapperClassName = '', className = '', error }) => {
  return (
    <div className={cls('mb-4', wrapperClassName)}>
      <Label className='mb-1' item={item} />

      <input
        {...field}
        type={item.type}
        disabled={item.disabled}
        hidden={item.hidden}
        placeholder={item.placeholder}
        className={cls('w-full', className)}
      />
      {error && <span className='text-red-500 text-sm'>{error.message}</span>}
    </div>
  );
};

export default Input;
