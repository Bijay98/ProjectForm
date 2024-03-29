import { Routes,Route } from "react-router-dom"
import Register from "./pages/Register"
import Info from "./pages/Info"
import ShowCase from "./pages/ShowCase"
import Movies from "./pages/Movies"
function App() {
return <Routes>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/Info" element={<Info/>}/>
  <Route path="/ShowCase" element={<ShowCase/>}/>
  <Route path="/Movies" element={<Movies/>}/>
  <Route path="*" element={<h1>404 not found 🥲</h1>}/>
</Routes>
}

export default App
