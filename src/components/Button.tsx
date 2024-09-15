import { Item } from '@crudmates/form-config';
import { cls } from './util';

type Props = {
  item?: Item;
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const Button: React.FC<Props> = ({ item, className = '', ...props }) => {
  return (
    <button
      {...props}
      type={item?.type as any}
      className={cls(
        'w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        className,
      )}
    >
      {item?.label}
    </button>
  );
};

export default Button;
