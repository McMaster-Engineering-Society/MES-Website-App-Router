type TextFieldProps = {
  title?: string;
  value: string;
  constant?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
};
const TextField = ({
  title,
  value,
  constant,
  required,
  onChange,
}: TextFieldProps) => {
  return (
    <div className='flex flex-row h-10 items-center justify-between gap-1 text-nowrap'>
      {title && <p className='font-bold'>{title}:</p>}
      {constant ? (
        <p className='w-52 pl-3'>{value}</p>
      ) : (
        <input
          required={required}
          className='w-52 h-8 rounded-lg'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default TextField;
