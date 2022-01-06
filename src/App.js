import "./assets/css/style.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import {
  UserHome,
  AdminHome,
  MandorHome,
  NotFound,
  Login,
  Logout,
  Unauthorize,
  ChattingUser,
  ChattingMandor,
  LandingPage,
  Register
} from "./pages";
import { UserRoute } from "./components/routes";


import { BsFillArrowUpSquareFill } from "react-icons/bs";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);

    return () => (window.onscroll = null);
  };
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/user"
            element={
              <UserRoute>
                <UserHome />
              </UserRoute>
            }
          ></Route>
          <Route path="/user/chatting" element={<ChattingUser />}></Route>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/mandor" element={<MandorHome />}></Route>
          <Route path="/mandor/chatting" element={<ChattingMandor />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/unauthorize" element={<Unauthorize />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <div
        className={[
          "fixed bottom-10 right-10 transition-all duration-300 z-50",
          isScrolled ? " opacity-100" : " opacity-0",
        ].join(" ")}
      >
        <BsFillArrowUpSquareFill
          onClick={() => handleClick()}
          size="30px"
          color="#23A6F0"
          style={{ cursor: "pointer" }}
        ></BsFillArrowUpSquareFill>
      </div>
    </div>
  );
}

export default App;
