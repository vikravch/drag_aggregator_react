import React from "react";

type Props = {
    text: string
}

export const PrimaryButton: React.FC<Props> = ({text})=>{
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            {text}
        </button>
    )
}
