import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import './routes.css';
import Login from './Login/login';
import Register from './Register/register';
import Admin from './Admin/admin';
import Managebook from './ManageBook/managebook';
import Addbook from './ManageBook/addbook';
import Addcat from './ManageCat/addcat';
import Managecat from './ManageCat/managecat';
import Issuedbook from './ManageBook/issuedbook';
import Editbook from './ManageBook/editbook';
import Editcat from './ManageCat/editcat';
import User from './User/user';
import BookService from './ManageBook/bookservice';
import UserLogin from './userLogin';
import About from './About/about';

class Routes extends Component {
  state={
    loggedIn: BookService.loggedIn
  }
  
  userlog(){
    BookService.loggedIn=false;
this.setState({loggedIn:false})
  }
 
  componentDidMount(){
    this.setState({loggedIn:BookService.loggedIn});
  }
    render(){
    const routes=(
      <ul >
      <li><NavLink to="/" exact>About</NavLink></li>
      <UserLogin isLog={this.state.loggedIn} logout={this.userlog}/>
      <li><NavLink to="/register" exact>Register</NavLink></li>
  
    </ul>
    )
  return (
    <div >

      <header className="Route-header">
        <nav className="navi">
         {routes}
        </nav>
      </header>
      <Switch>
      <Route path="/" exact component={About}/>
      <Route path="/login"  component={Login}/>
      <Route path="/register" component={Register}/>
     <Route path="/admin/" exact component={Admin}/> 
 <Route path="/user/" exact component={User}/>
      <Route path="/admin/managebook"  component={Managebook}/>
      <Route path="/admin/addbook"  component={Addbook}/>
     <Route path="/admin/addcat"  component={Addcat}/>
    <Route path="/admin/managecat"  component={Managecat}/>
     <Route path="/admin/viewissued"  component={Issuedbook}/>
      <Route path="/admin/editbook/:id"  component={Editbook}/>
   <Route path="/admin/editcat/:id"  component={Editcat}/>
      </Switch>
      
      
     
    </div>
  );
}}

export default Routes;
