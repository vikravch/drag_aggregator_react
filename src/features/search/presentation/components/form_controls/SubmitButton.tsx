import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const SubmitButton: React.FC = ()=>{
    return (
        <button className="bg-blue-500 px-4 text-white hover:bg-blue-600">
            <FontAwesomeIcon icon={faSearch}/>
        </button>
    )
}
