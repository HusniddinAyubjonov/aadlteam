import { AppRoutes } from "./route/app.route"
import styles from "../style/global.module.css"
import { Header } from "../ui-components/header/header.component"
import { Footer } from "../ui-components/footer/footer.component"

export function App() {
  // ---------------------------------------------------------------------------
  
  return (
    <div className={styles.root}>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}