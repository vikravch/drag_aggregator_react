import React, {useEffect} from 'react';
import {BreadcrumpSection} from "../components/breadcrump/BreadcrumpSection.tsx";
import {TitleText} from "../components/TitleText.tsx";
import {SearchInput} from "../components/form_controls/SearchInput.tsx";
import {SubmitButton} from "../components/form_controls/SubmitButton.tsx";
import {CardItem} from "../components/card_item/CardItem.tsx";
import type {Drag} from "../../domain/Drag.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../../redux/store.ts";
import {searchByName} from "../redux/searchSlice.ts";

export const SearchPage: React.FC = ()=>{
    const dragList =
        useSelector<RootState,Drag[]>(state =>
            state.drag.list)
    const dispatch =
        useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(searchByName(''))
    }, []);
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
                {/*<h2 className='py-4'>
                    No items found
                </h2>*/}
                {
                    dragList.map(item=>(
                        <CardItem
                            price={item.price.toString()}
                            title = {item.dragName}
                            description = {item.description}
                        />
                    ))
                }
            </section>
        </main>
    )
}
