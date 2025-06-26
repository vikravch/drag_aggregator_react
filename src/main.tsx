import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import {SearchPage} from "./features/search/presentation/page/SearchPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchPage />
  </StrictMode>,
)
