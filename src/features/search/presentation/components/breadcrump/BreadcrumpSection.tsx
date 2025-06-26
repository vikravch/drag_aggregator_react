import React from "react";
import {PrimaryBreadcrump} from "./PrimaryBreadcrump.tsx";
import {SecondaryBreadcrump} from "./SecondaryBreadcrump.tsx";
import {BreadcrumpArrow} from "./BreadcrumpArrow.tsx";

export const BreadcrumpSection: React.FC = ()=>{
    return (
        <section>
            <div className='flex space-x-4 space-y-7'>
                <PrimaryBreadcrump text={'Home'}/>
                <BreadcrumpArrow/>
                <SecondaryBreadcrump text={'Search products'}/>
            </div>
        </section>
    )
}
