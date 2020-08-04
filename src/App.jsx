import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Breads from "./bread/Breads";
import { Link } from 'react-router-dom'
import Features from "./components/Features";
import About from "./components/About";
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
        <div>
          <Navigation />
          <Header data={this.state.landingPageData.Header} />
          <Features data={this.state.landingPageData.Features} />
          <About data={this.state.landingPageData.About} />
        </div>


    )
  }
}

export default App;
