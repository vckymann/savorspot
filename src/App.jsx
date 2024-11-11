import { Outlet } from "react-router-dom"
import { FloatingNavDemo } from "./components/acternity/Navbar/index"
import ScrollToTop from "./hooks/scrollToTop"
import useMenuItems from "./hooks/useMenuItems"
function App() {

  useMenuItems();

  return (
    <>
    <ScrollToTop />
    <FloatingNavDemo />
    <Outlet />
    </>
  )
}

export default App
