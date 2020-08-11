import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Services from './services';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
//import $ from 'jquery';
import {Breads} from "../bread/Breads";
import {Features} from "./Features";
import {About} from './About';
import {App} from '../App';
import {Admin} from "../admin";
import Search from "../search/Search";
import Signin from "../member/Signin";
import {SignUp} from "../member";
import {AboutDetail} from "./AboutDetail";
import Bread01 from "../details/Bread01";
import Order from "../order/Order";
import Mypage from "../member/Mypage";


const Main = () => {
    return <div>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {App}/>
                    <Route path="/features" component = {Features} />
                    <Route path="/about" component ={About} />
                    <Route path="/services" component = {Services} />
                    <Route path="/testimonials" component = {Testimonials}/>
                    <Route path="/team" component = {Team}/>
                    <Route path="/contact" component = {Contact}/>
                    <Route path="/breads" component = {Breads} />
                    <Route path="/admin" component={Admin}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/AboutDetail" component={AboutDetail}/>
                    <Route path="/Bread01" component={Bread01}/>
                    <Route path="/Order" component={Order}/>
                    <Route path="/Mypage" component={Mypage}/>
                    <Route path="/Contact" component={Contact}/>

                </Switch>
        </BrowserRouter>
    </div>


}

export default Main
