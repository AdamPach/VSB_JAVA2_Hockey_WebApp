import {Route, Routes} from "react-router-dom";
import Index from "./pages/Home/Index";
import Navigation from "./pages/Navigation/Navigation.tsx";
import AllTeams from "./pages/Teams/AllTeams.tsx";
import TeamDetail from "./pages/Teams/TeamDetail.tsx";
import AddTeam from "./pages/Teams/AddTeam.tsx";
import AllPlayers from "./pages/Players/AllPlayers.tsx";
import PlayerDetail from "./pages/Players/PlayerDetail.tsx";
import AddPlayer from "./pages/Players/AddPlayer.tsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Navigation />} >
            <Route index element={<Index />} />
            <Route path="teams" >
                <Route index element={<AllTeams />} />
                <Route path="add" element={<AddTeam />} />
                <Route path=":teamId" element={<TeamDetail />} />
            </Route>
            <Route path={"players"} >
                <Route index element={<AllPlayers />} />
                <Route path="add" element={<AddPlayer />} />
                <Route path=":playerId" element={<PlayerDetail />} />
            </Route>
        </Route>
    </Routes>
  )
}

export default App
