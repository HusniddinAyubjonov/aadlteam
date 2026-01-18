import { createRoot } from "react-dom/client"
import { App } from "./app/app.component.tsx"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
