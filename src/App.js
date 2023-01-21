import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Update from "./components/Update";
import Home from "./components/Home";
import Login from "./components/Signup/Login";
import Profile from "./components/ProfileSection/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
