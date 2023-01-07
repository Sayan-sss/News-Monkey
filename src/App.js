import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar />
          <Routes>
            {/* <Route path="/" element={<NavBar />}/> */}
            <Route path="/general" key="general" pageSize={this.pageSize} country="in" category="general" element={<News />}/>
            <Route path="/business" key="business" pageSize={this.pageSize} country="in" category="business" element={<News/>}/>
            <Route path="/entertainment" key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" element={<News/>}/>
            {/* <Route path="/general" key="general" pageSize={this.pageSize} country="in" category="general" element={<News/>}/> */}
            <Route path="/health" key="health" pageSize={this.pageSize} country="in" category="health" element={<News/>}/>
            <Route path="/science" key="science" pageSize={this.pageSize} country="in" category="science" element={<News/>}/>
            <Route path="/sports" key="sports" pageSize={this.pageSize} country="in" category="sports" element={<News/>}/>
            <Route path="/technology" key="technology" pageSize={this.pageSize} country="in" category="technology" element={<News/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
