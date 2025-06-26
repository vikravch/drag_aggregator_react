import React, {type PropsWithChildren} from "react";

export const TitleText: React.FC<PropsWithChildren> = (
    {children}
)=>{
    return (
        <h1 className="text-3xl font-bold text-text-color py-4">{children}</h1>
    )
}
