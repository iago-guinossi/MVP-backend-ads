import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"
import { Events } from "./pages/Events"
import { Trails } from "./pages/Trails"
import { Waterfalls} from "./pages/WaterFalls"
import { Biodiversity } from "./pages/Biodiversity"
import { Season } from "./pages/Season"
import { Login } from "./pages/Login"
import { ADMTrails } from "./pages/ADMTrails"
import { ADMEvents } from "./pages/ADMEvents"
import { ADMWaterfalls } from "./pages/ADMWaterFalls/ADMWaterFalls"
import { ADMSeason } from "./pages/ADMSeason/ADMSeason"
import { ScrollToTop } from "./service/ScrollToTop"
import { TrilhaProvider } from "./provider/TrilhaProvider"
import { ProtectedRoute } from "./components/ProtectedRoute"

function App() {

  return (
    <BrowserRouter>
    <TrilhaProvider>
    <ScrollToTop/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/eventos" element={<Events/>}/>
      <Route path="/trilhas" element={<Trails/>}/>
      <Route path="/cachoeiras" element={<Waterfalls/>}/>
      <Route path="/biodiversidade" element={<Biodiversity/>}/>
      <Route path="/temporada" element={<Season/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/adm-trilhas" element={<ProtectedRoute><ADMTrails/></ProtectedRoute>}/>
      <Route path="/adm-eventos" element={<ProtectedRoute><ADMEvents/></ProtectedRoute>}/>
      <Route path="/adm-cachoeiras" element={<ProtectedRoute><ADMWaterfalls/></ProtectedRoute>}/>
      <Route path="/adm-temporada" element={<ProtectedRoute><ADMSeason/></ProtectedRoute>}/>
    </Routes>
    </TrilhaProvider>
    </BrowserRouter>
      
  )
}

export default App
