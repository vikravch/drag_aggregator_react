import React from "react";
import {PrimaryButton} from "../../../../../components/PrimaryButton.tsx";

type CardItemProps = {
    title: string;
    description: string;
    price: string;
};

export const CardItem: React.FC<CardItemProps> = (
    { title, description, price }) => {
    return (
        <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-4 m-2 border border-blue-400 rounded-2xl">
            <div>
                <h2 className="text-blue-400 font-bold text-2xl uppercase mb-4">{title}</h2>
                <p className="text-green-600 text-lg">{description}</p>
            </div>
            <div className="text-center">
                <div className="flex items-start justify-center text-4xl font-bold text-blue-400">
                    <span>{price}</span>
                    <span className="text-2xl text-blue-400 mt-1 ml-1">$</span>
                </div>
                <p className="text-blue-400 text-lg mb-2">Per Item</p>
                <PrimaryButton text="Add to cart"/>
            </div>
        </div>
    );
};
