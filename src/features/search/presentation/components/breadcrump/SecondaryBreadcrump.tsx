import React from "react";

type Props = {
    text: string
}

export const SecondaryBreadcrump: React.FC<Props> = (
    {text}
)=>{
    return (
        <span className={"text-sm text-second-text-color"}>{text}</span>
    )
}
