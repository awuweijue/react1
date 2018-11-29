import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router ,Route,Link} from 'react-router-dom';
import Xhome from './components/home/home'
import Xhome2 from './components/home/home2'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [
      {path : '/home',name : 'one'},
      {path : '/home/home2',name : 'two'},
      ]
    }
  }
  render() {
    return (
      <div>
        {
          (()=>{
            return this.state.data.map((item,idx)=>{
              return  <Link to={item.path} key={idx}>{item.name}</Link>
            })
          })()
          
        }
       
        <Route path='/home' component={Xhome}></Route>     
        <Route path='/home/home2' component={Xhome2}></Route>     
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default App;
