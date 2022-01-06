const TextInput = ({ placeholder, type, onChange, value, name }) => {
  return (
    <div className="mb-5">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="w-9/12 px-4 py-2 border border-blue-500 rounded-full focus:outline-none"
      />
    </div>
  );
};

export default TextInput;
