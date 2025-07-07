import React from "react";
import iconUser from "../../../../../assets/ic_user.svg"

type Props = {
    userEmail: string
}

export const AuthBox: React.FC<Props> = ({userEmail})=>{
    return (
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
            <div className="text-blue-500">
                <img src={iconUser}/>
            </div>
            <div>
                <div className="text-3xl font-bold text-gray-900">2680</div>
                <div className="text-gray-500 text-lg">{userEmail}</div>
            </div>
        </div>
    )
}
