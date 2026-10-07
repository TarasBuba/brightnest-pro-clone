import { type FieldError } from 'react-hook-form';

type FormFieldProps = {
  id: string;
  label: string;
  children: (props: {
    'aria-invalid': boolean;
    'aria-describedby': string;
  }) => React.ReactNode;
  error?: FieldError;
};

export function FormField({ id, label, children, error }: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="block text-sm font-semibold text-dark">
          {label}
        </label>
        {children({ 'aria-invalid': !!error, 'aria-describedby': errorId })}
        {error && (
          <span
            id={errorId}
            className="text-red-500 text-xs font-medium"
            role="alert"
          >
            {error.message}
          </span>
        )}
      </div>
    </>
  );
}
