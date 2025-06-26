import React from "react";

type LabelProps = {
    htmlFor?: string;
    text: string;
};

export const Label: React.FC<LabelProps> = ({ htmlFor, text }) => (
    <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1"
    >
        {text} <span className="text-red-500">*</span>
    </label>
);
