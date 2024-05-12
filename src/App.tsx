import {Route, Routes} from "react-router-dom";
import Index from "./pages/Home/Index";
import Navigation from "./pages/Navigation/Navigation.tsx";
import AllTeams from "./pages/Teams/AllTeams.tsx";
import TeamDetail from "./pages/Teams/TeamDetail.tsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Navigation />} >
            <Route index element={<Index />} />
            <Route path="teams" >
                <Route index element={<AllTeams />} />
                <Route path=":teamId" element={<TeamDetail />} />
            </Route>
        </Route>
    </Routes>
  )
}

export default App
