import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCJ0ML15wxxDEUftadNXg2sQ7J_24cEnnE",
    authDomain: "trackerapp-b737e.firebaseapp.com",
    projectId: "trackerapp-b737e",
    storageBucket: "trackerapp-b737e.firebasestorage.app",
    messagingSenderId: "62078825670",
    appId: "1:62078825670:web:d17edea62817cec1c093c7",
    measurementId: "G-61JWJ4LERL"
};

export const createUserWithFirebase = async (
    email: string, password: string
)=> {
    try{
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
            auth, email, password);
        const user = userCredential.user;
        console.log(user.email);
        return Promise.resolve();
    } catch (e) {
        console.error(e);
        return Promise.reject('Firebase error');
    }
}

export const signInWithFirebase = async (
    email: string, password: string
) => {
    try{
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
            auth, email, password);
        const user = userCredential.user;
        console.log(user.email);
        return Promise.resolve();
    } catch (e) {
        console.error(e);
        return Promise.reject('Firebase error');
    }
}

export const getIsAuthUser = async ()=>{
    try{
        const auth = getAuth();
        return auth.currentUser?.email || ""
    } catch (e) {
        console.log(e);
        return Promise.reject("User is auth error!")
    }
}
