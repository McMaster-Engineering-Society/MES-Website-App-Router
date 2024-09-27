type TextFieldProps = {
  value: string;
  editable: boolean;
  onChange: (value: string) => void;
};
const TextField = ({ value, editable, onChange }: TextFieldProps) => {
  return editable ? (
    <input
      className='w-full h-full rounded-lg'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  ) : (
    <p>{value}</p>
  );
};

export default TextField;
