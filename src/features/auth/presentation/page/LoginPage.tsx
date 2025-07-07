import React, {useEffect, useState} from "react";
import {Label} from "../components/Label.tsx";
import {InputField} from "../components/InputField.tsx";
import {PrimaryButton} from "../../../../components/PrimaryButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../../redux/store.ts";
import {loginUser} from "../redux/authSlice.ts";
import {useNavigate} from "react-router-dom";

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const isAuthenticated = useSelector<RootState, boolean>(
        state => state.auth.isAuthenticated
    );
    useEffect(() => {
        if(isAuthenticated){
            navigate('/');
        }
    }, [isAuthenticated]);

    const dispatch = useDispatch<AppDispatch>();

    const loginUserClick = async ()=>{
        dispatch(loginUser({email,password}));
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-blue-400 mb-6 pb-2">
                Login to your account
            </h2>

            <form className="space-y-4">
                <div>
                    <Label text="Email address"/>
                    <InputField type="email" placeholder="example@gmail.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <Label text="Password"/>
                    <InputField type="password" placeholder="Your password"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}/>
                </div>

                <div className="pt-4">
                    <PrimaryButton
                        text="Login"
                        className={"w-full"}
                        onClick={loginUserClick}/>
                </div>
            </form>
        </div>
    );
};
