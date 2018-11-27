import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DatePicker, TimePicker } from "antd";

import MainLayout from "./components/Layouts/MainLayout";

import { ListBusRoutes } from "./components/Pages/BusRoutes";

class App extends Component {
  render() {
    return (
      <MainLayout>
        <ListBusRoutes />
      </MainLayout>
    );
  }
}

export default App;
