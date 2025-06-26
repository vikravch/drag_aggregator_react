import React from "react";
import {Label} from "../components/Label.tsx";
import {InputField} from "../components/InputField.tsx";
import {PrimaryButton} from "../components/PrimaryButton.tsx";

export const SignupPage: React.FC = () => {
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
                    <InputField type="email" placeholder="example@gmail.com" />
                </div>

                <div>
                    <Label text="Password" />
                    <InputField type="password" placeholder="Qwertyuiop" />
                </div>

                <div className="pt-4">
                    <PrimaryButton text="Create" type="submit" />
                </div>
            </form>
        </div>
    );
};
