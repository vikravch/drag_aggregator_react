import {createUserWithFirebase, getIsAuthUser, signInWithFirebase} from "../data/firebase.ts";



export type AuthRepository = {
    signIn: (email: string, password: string)=>Promise<void>,
    register: (email: string, password: string)=>Promise<void>,
    getIsAuthUser: ()=>Promise<string>
}

const AuthFirebaseRepository: AuthRepository = {
    async getIsAuthUser(): Promise<string> {
        const userEmail = await getIsAuthUser();
        if (userEmail){
            return Promise.resolve(userEmail);
        } else {
            return Promise.reject("No user");
        }
    },
    signIn: (email: string, password: string)=> {
        return signInWithFirebase(email, password);
    },
    register: (email: string, password: string)=> {
        return createUserWithFirebase(email, password);
    }

}

export default AuthFirebaseRepository;

export const AuthFakeRepository: AuthRepository = {
    getIsAuthUser(): Promise<string> {
        return Promise.resolve("");
    },
    register(email: string, password: string): Promise<void> {
        console.log(email, password);
        return Promise.resolve(undefined);
    }, signIn(email: string, password: string): Promise<void> {
        console.log(email, password)
        return Promise.resolve(undefined);
    }
}
