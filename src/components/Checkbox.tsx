import { Item } from '@crudmates/form-config';
import Label from './Label';

type Props = {
  field: any;
  error: any;
  item: Item;
  tabIndex?: number;
  changeGroup?: (value: string) => void;
};

const Checkbox: React.FC<Props> = ({ field, error, item, changeGroup, tabIndex }) => {
  const handleChange = () => {
    if (changeGroup) {
      changeGroup(item.name);
    } else {
      field.onChange(field.value === item.name ? '' : item.name);
    }
  };

  return (
    <div className='mb-4'>
      <div className='flex items-center gap-x-2'>
        <Label item={item} />

        <input
          {...field}
          type='checkbox'
          disabled={item.disabled}
          checked={item?.default ?? field.value}
          className={`h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 ${
            error ? 'border-red-500 focus:ring-red-500' : ''
          }`}
          onChange={handleChange}
        />
      </div>

      {error && !changeGroup && <span className='text-red-500 text-sm'>{error.message}</span>}

      {error && tabIndex === 0 && (
        <p className='text-red-500 text-sm absolute -bottom-3'>{error.message}</p>
      )}
    </div>
  );
};

export default Checkbox;
