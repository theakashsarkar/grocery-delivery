import React from "react";
const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  Icon,
  required = false,
}) => {
  return (
    <label className="text-sm flex flex-col gap-1">
      {label}
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
        />
      </div>
    </label>
  );
};
export default InputField;
