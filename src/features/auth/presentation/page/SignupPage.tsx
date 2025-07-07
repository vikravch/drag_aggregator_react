import React, {useState} from "react";
import {Label} from "../components/Label.tsx";
import {InputField} from "../components/InputField.tsx";
import {PrimaryButton} from "../../../../components/PrimaryButton.tsx";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../../redux/store.ts";
import {signupUser} from "../redux/authSlice.ts";

export const SignupPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const signupUserClick = async ()=>{
        dispatch(signupUser({email,password}));
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-blue-400 mb-6 pb-2">
                Create new account
            </h2>

            <form className="space-y-4">
                <div>
                    <Label text="Name" />
                    <InputField type="text" placeholder="Full Name *" />
                </div>

                <div>
                    <Label text="Email address" />
                    <InputField type="email" placeholder="example@gmail.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <Label text="Password" />
                    <InputField type="password" placeholder="Qwertyuiop"
                                value={password}
                                onChange={e=> setPassword(e.target.value)}/>
                </div>

                <div className="pt-4">
                    <PrimaryButton
                        text="Create"
                        className={"w-full"}
                        onClick={signupUserClick}
                    />
                </div>
            </form>
        </div>
    );
};
