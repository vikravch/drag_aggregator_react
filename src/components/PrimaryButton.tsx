import React from "react";

type PrimaryButtonProps = {
    text: string;
    type?: "button" | "submit";
    fullWidth?: boolean;
    className?: string; // allow further customization if needed
    onClick?: ()=>void;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = (
    {text, type = "button", fullWidth = false, className = "", onClick}) => {
    const baseStyles =
        "bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition";

    const widthStyle = fullWidth ? "w-full" : "";

    return (
        <button type={type} className={`${baseStyles} ${widthStyle} ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};
