import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Instructions } from "./routes/Instructions";
import { Login } from "./routes/Login";
import { Navigation } from "./routes/Navigation";
import { NotFoundPage } from "./routes/NotFoundPage";
import { Dishes } from "./routes/Dishes";

function App() {
  const [menuObj, setMenuObj] = useState("");
  const getMenuObj = (dish) => setMenuObj(dish); // function to lift up the data from child Dishes and update parent's state
  return (
    <div>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dishes"
            element={<Dishes getMenuObj={getMenuObj} />} // props -> function
          />
          <Route
            path="/instructions"
            element={menuObj && <Instructions menuObj={menuObj} />} // props -> state updated via getMenuObj function in Dishes
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
