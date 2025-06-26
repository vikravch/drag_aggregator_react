import React from 'react';
import {BreadcrumpSection} from "../components/breadcrump/BreadcrumpSection.tsx";
import {TitleText} from "../components/TitleText.tsx";
import {SearchInput} from "../components/form_controls/SearchInput.tsx";
import {SubmitButton} from "../components/form_controls/SubmitButton.tsx";

export const SearchPage: React.FC = ()=>{
    return (
        <main className="max-w-4xl mx-auto py-10 px-4">
            <BreadcrumpSection/>

            <section>
                <div>
                    <TitleText>Marketplace Products</TitleText>
                    <div className="flex rounded-md
                        shadow-sm overflow-hidden
                        bg-gray-50 border border-gray-200" >

                        <SearchInput/>
                        <SubmitButton/>
                    </div>
                </div>
            </section>

            <section>
                <h2 className='py-4'>
                    No items found
                </h2>
            </section>
        </main>
    )
}
