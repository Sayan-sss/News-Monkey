import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar />
          <Routes>
            {/* <Route path="/" element={<NavBar />}/> */}
            <Route path="/" key="general" pageSize={6} country="in" category="home" element={<News />}/>
            <Route path="/business" key="business" pageSize={6} country="in" category="business" element={<News/>}/>
            <Route path="/entertainment" key="entertainment" pageSize={6} country="in" category="entertainment" element={<News/>}/>
            <Route path="/general" key="general" pageSize={6} country="in" category="general" element={<News/>}/>
            <Route path="/health" key="health" pageSize={6} country="in" category="health" element={<News/>}/>
            <Route path="/science" key="science" pageSize={6} country="in" category="science" element={<News/>}/>
            <Route path="/sports" key="sports" pageSize={6} country="in" category="sports" element={<News/>}/>
            <Route path="/technology" key="technology" pageSize={6} country="in" category="technology" element={<News/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
