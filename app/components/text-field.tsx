type Props = {
  type?: InputType;
  name?: string;
  label?: string;
};

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export default function TextField({ type, name, label }: Props) {
  return (
    <input
      name={name}
      type={type ?? 'text'}
      placeholder={label}
      className="input input-bordered w-full"
    />
  );
}
