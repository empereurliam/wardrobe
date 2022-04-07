import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Select from "./pages/select";
import Import from "./pages/import";
import TryOn from "./pages/tryon";
import Wardrobe from "./pages/wardrobe";
import Navbar from "./components/navbar/navbar";
import SignIn from "./pages/signin";
import useToken from "./components/token/useToken";

export default function App() {
  const { token, setToken } = useToken();

  console.log("repasse par ici");

  if (!token) {
    console.log("pas connecté");
    return <SignIn setToken={setToken} />;
  } else {
    console.log("connecté");
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Wardrobe />} />
            <Route path="/select" element={<Select />} />
            <Route path="/import" element={<Import />} />
            <Route path="/tryon" element={<TryOn />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
