import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Radiohead from "./pages/Radiohead";
import Portishead from "./pages/Portishead";
import Rammstein from "./pages/Rammstein";
import TaylorSwift from "./pages/TaylorSwift";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Search />
      <Routes>
        <Route path="/radiohead/album1" element={<Radiohead albumIndex={0}/>}/>
        <Route path="/radiohead/album2" element={<Radiohead albumIndex={1}/>}/>
        <Route path="/portishead/album1" element={<Portishead albumIndex={0}/>}/>
        <Route path="/portishead/album2" element={<Portishead albumIndex={1}/>}/>
        <Route path="/rammstein/album1" element={<Rammstein albumIndex={0}/>}/>
        <Route path="/rammstein/album2" element={<Rammstein albumIndex={1}/>}/>
        <Route path="/taylorswift/album1" element={<TaylorSwift albumIndex={0}/>}/>
        <Route path="/taylorswift/album2" element={<TaylorSwift albumIndex={1}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
