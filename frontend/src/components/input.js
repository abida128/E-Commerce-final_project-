const fixedInputClass =
  "rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-purple-500 sm:text-sm bg-[#ededed]";
export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = true,
  placeholder,
  customClass,
}) {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="">
        {labelText}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
