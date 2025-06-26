import React from "react";

type InputFieldProps = {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = (
    {type,placeholder,value,onChange,}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
};
