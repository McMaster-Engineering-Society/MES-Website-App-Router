type TextFieldProps = {
  title?: string;
  value: string;
  editable: boolean;
  required?: boolean;
  onChange: (value: string) => void;
};
const TextField = ({
  title,
  value,
  editable,
  required,
  onChange,
}: TextFieldProps) => {
  return (
    <div className='flex flex-row h-10 items-center justify-between gap-1 text-nowrap'>
      {title && <p className='font-bold'>{title}:</p>}
      {editable ? (
        <input
          required={required}
          className='w-52 h-8 rounded-lg'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <p className='w-52 pl-3'>{value}</p>
      )}
    </div>
  );
};

export default TextField;
