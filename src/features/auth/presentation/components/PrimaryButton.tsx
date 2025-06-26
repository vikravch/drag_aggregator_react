import React from "react";

type PrimaryButtonProps = {
    text: string;
    type?: "button" | "submit";
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = (
    {text,type = "button",}) => (
    <button
        type={type}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
    >
        {text}
    </button>
);
