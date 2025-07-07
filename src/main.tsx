import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {AppRouter} from "./router/AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {firebaseConfig} from "./features/auth/data/firebase.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseService = {
    firebaseApp: app,
    analyticsService: analytics
}
