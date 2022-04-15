import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Select from "./pages/select";
import Import from "./pages/import";
import SignOut from "./pages/signout";
import TryOn from "./pages/tryon";
import Wardrobe from "./pages/wardrobe";
import Navbar from "./components/navbar/navbar";
import SignIn from "./pages/signin";
import useToken from "./components/token/useToken";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    console.log("not connected");
    return <SignIn setToken={setToken} />;
  } else {
    console.log("connected");
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Wardrobe />} />
            <Route path="/select" element={<Select />} />
            <Route path="/import" element={<Import />} />
            <Route path="/tryon" element={<TryOn />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
