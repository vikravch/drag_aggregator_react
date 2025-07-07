import React from "react";
import {PrimaryBreadcrump} from "./PrimaryBreadcrump.tsx";
import {SecondaryBreadcrump} from "./SecondaryBreadcrump.tsx";
import {BreadcrumpArrow} from "./BreadcrumpArrow.tsx";
import {AuthBox} from "../auth_box/AuthBox.tsx";

type Props = {
    userEmail: string
}

export const BreadcrumpSection: React.FC<Props> = ({userEmail})=>{
    return (
        <section className='flex items-center'>
            <div className='flex flex-1/2 space-x-4 space-y-7'>
                <PrimaryBreadcrump text={'Home'}/>
                <BreadcrumpArrow/>
                <SecondaryBreadcrump text={'Search products'}/>
            </div>
            <AuthBox userEmail={userEmail}/>
        </section>
    )
}
