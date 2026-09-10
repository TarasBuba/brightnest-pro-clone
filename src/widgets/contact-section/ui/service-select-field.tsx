import type {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Services } from '@/src/shared/lib/utils/services-data';
import { FormField } from './form-field';

type SelectFieldsProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
};

export function SelectFields<T extends FieldValues>({
  name,
  label = 'Service Needed',
  register,
  error,
}: SelectFieldsProps<T>) {
  if (!name) {
    throw new Error(
      'SelectFields requires a "name" prop for react-hook-form registration',
    );
  }
  return (
    <FormField id={name} label={label} error={error}>
      {(ariaProps) => (
        <select id={name} defaultValue="" {...register(name)} {...ariaProps}>
          <option label="">Service Needed</option>
          {Services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      )}
    </FormField>
  );
}
