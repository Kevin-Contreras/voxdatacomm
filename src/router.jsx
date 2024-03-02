import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./components/Login";
import ResponsiveAppBar from "./components/nav";
import Register from "./components/register";
import Home from "./components/home";
import Zona from "./components/zona";
export default function App() {
  return (
    <BrowserRouter>
            {localStorage.getItem("token")!=undefined && localStorage.getItem("token")!="" ?<ResponsiveAppBar/>:""}

      <Routes>
       <Route  path="/home" element={<Home />} />

         {/* <Route path="*" element={<NoPage />} />*/}
         <Route  path="/" element={<SignInSide />} />
         <Route  path="/register" element={<Register />} />
         <Route  path="/distancia" element={<Zona />} />


      </Routes>
    </BrowserRouter>
  );
}

