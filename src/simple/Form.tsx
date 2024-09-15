import { stage } from '@crudmates/form-config';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Radio from '../components/Radio';
import Select from '../components/Select';
import form from './config';
import { schema } from './schema';

const Form = () => {
  const { control, handleSubmit, formState } = useForm({
    mode: 'onBlur',
    defaultValues: stage(form),
    resolver: zodResolver(schema),
  });

  console.log(formState.errors);

  const onSubmit = (data: any) => {
    console.log('SUBMITTED DATA: ', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-xl mx-auto p-4 bg-white shadow-md rounded'
    >
      <h1 className='text-lg underline  mb-10 text-center uppercase'>{form.label}</h1>

      {form.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className='mb-6'>
          <h2 className='text-lg font-semibold mb-4'>{section.label}</h2>
          {section.items.map((item, itemIndex) => {
            return (
              <Controller
                key={itemIndex}
                name={item.name}
                control={control}
                rules={item.validation}
                render={({ field, fieldState: { error } }) => {
                  const className = `mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                    error
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                  }`;

                  switch (item.type) {
                    case 'text':
                    case 'password':
                    case 'email':
                    case 'date':
                      return (
                        <Input item={item} field={field} error={error} className={className} />
                      );
                    case 'select':
                      return (
                        <Select
                          item={item}
                          field={field}
                          error={error}
                          options={item.options}
                          className={className}
                        />
                      );
                    case 'radio':
                      return <Radio item={item} field={field} error={error} />;
                    case 'checkbox':
                      return <Checkbox item={item} field={field} error={error} />;
                    case 'submit':
                      return <Button item={item} />;
                    default:
                      return <div />;
                  }
                }}
              />
            );
          })}
        </div>
      ))}
    </form>
  );
};

export default Form;
