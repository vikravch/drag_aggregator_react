import React from "react";

type Props = {
    text: string
}

export const PrimaryBreadcrump: React.FC<Props> = ({text})=>{
    return (
        <span className={"text-sm text-text-color font-semibold"}>{text}</span>
    )
}
