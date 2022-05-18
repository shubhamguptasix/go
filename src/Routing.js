import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Container/Home";
import View from "./Container/View";
import Edit from "./Container/EditPage";
import Create from './Container/Create';
import Login from "./Container/Login";


const Routing = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Login />} />
        <Route exact path="/Home" caseSensitive={false} element={<Home />} />
        <Route exact path="/Create" caseSensitive={false} element={<Create />} />
        <Route exact path="/View/:ViewId" caseSensitive={false} element={<View />} />
        <Route exact path="/Edit/:EditId" caseSensitive={false} element={<Edit />} />
      </Routes>
    </Router>
  );
};
export default Routing;
