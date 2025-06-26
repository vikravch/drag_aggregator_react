import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import {SearchPage} from "./features/search/presentation/page/SearchPage.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <SearchPage />
      </Provider>
  </StrictMode>,
)
