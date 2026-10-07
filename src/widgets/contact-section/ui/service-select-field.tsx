import type {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import { FormField } from './form-field';
import { CONTACT_SERVICES } from '../model/schema';

type SelectFieldsProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
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
        <select
          id={name}
          defaultValue=""
          {...register(name)}
          {...ariaProps}
          className="w-full rounded-[var(--radius-md)] border border-gray-300 bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-primary)]"
        >
          <option value="" disabled>
            Select Service (Handyman / Painting)...
          </option>
          {CONTACT_SERVICES.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      )}
    </FormField>
  );
}
