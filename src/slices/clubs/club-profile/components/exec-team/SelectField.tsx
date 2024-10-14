type SelectFieldProps = {
  title?: string;
  value: string;
  options: string[] | readonly string[];
  onChange: (value: string) => void;
};
const SelectField = ({ title, value, options, onChange }: SelectFieldProps) => {
  return (
    <div className='flex flex-row h-10 items-center justify-between gap-1 text-nowrap'>
      {title && <p className='font-bold'>{title}:</p>}
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
    </div>
  );
};

export default SelectField;
