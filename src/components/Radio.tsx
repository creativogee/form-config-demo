import { Item } from '@crudmates/form-config';
import Label from './Label';

type Props = {
  field: any;
  error: any;
  item: Item;
  className?: string;
};

const Radio: React.FC<Props> = ({ field, item, className, error }) => {
  return (
    <div className='mb-4'>
      <div className='flex items-center'>
        <Label item={item} />

        <div className='flex gap-4 ml-5'>
          {item.options?.map((option, index) => (
            <div key={index} className='flex items-center gap-2'>
              <Label item={item} option={option} />

              <input
                {...field}
                type={item.type}
                id={`${item.name}-${option.name}`}
                value={option.name}
                checked={field.value === option.name}
                className={`h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 ${className}`}
              />
            </div>
          ))}
        </div>
      </div>
      {error && <span className='text-red-500 text-sm'>{error.message}</span>}
    </div>
  );
};

export default Radio;
