import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {AppRouter} from "./router/AppRouter.tsx";
import {HashRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </HashRouter>
    </StrictMode>,
)
