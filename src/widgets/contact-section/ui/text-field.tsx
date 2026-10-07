import type {
  UseFormRegister,
  FieldError,
  Path,
  FieldValues,
} from 'react-hook-form';
import { FormField } from './form-field';

type TextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: 'email' | 'password' | 'text' | 'tel';
  autoComplete?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
};

export function TextField<T extends FieldValues>({
  name,
  label,
  placeholder,
  type = 'text',
  autoComplete,
  register,
  error,
}: TextFieldProps<T>) {
  return (
    <FormField id={name} label={label} error={error}>
      {(ariaProps) => (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name)}
          {...ariaProps}
          className="w-full rounded-var(--radius-md) border border-gray-300 px-3 py-2"
        />
      )}
    </FormField>
  );
}
