import {Route, Routes} from "react-router-dom";
import Index from "./pages/Home/Index";
import Navigation from "./pages/Navigation/Navigation.tsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Navigation />} >
            <Route index element={<Index />} />
        </Route>
    </Routes>
  )
}

export default App
