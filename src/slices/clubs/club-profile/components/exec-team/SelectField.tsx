type SelectFieldProps = {
  title?: string;
  value: string;
  editable: boolean;
  options: string[] | readonly string[];
  onChange: (value: string) => void;
};
const SelectField = ({
  title,
  value,
  editable,
  options,
  onChange,
}: SelectFieldProps) => {
  return (
    <div className='flex flex-row h-10 items-center justify-between gap-1 text-nowrap'>
      {title && <p className='font-bold'>{title}:</p>}
      {editable ? (
        <select
          className='w-52 h-8 rounded-lg p-0 pl-3'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <p className='w-52 pl-3'>{value}</p>
      )}
    </div>
  );
};

export default SelectField;
