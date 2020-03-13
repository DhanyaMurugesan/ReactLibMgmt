import React, {Component} from 'react';
import { Form, Button, InputGroup, Card} from 'react-bootstrap';
import './login.css';
import BookService from '../ManageBook/bookservice';

class Login extends Component{
state={
  users:[],
  email:'',
  password:'',
  utype:'' 
}

  login=()=>{
    BookService.getUser()
    .then(response => {
        this.setState({users: response.data});
        let exist=false;
        for(let i=0;i<this.state.users.length;i++){
          if(this.state.email == this.state.users[i].email){
                 exist=true;
            if(this.state.password == this.state.users[i].password){
              if(this.state.utype == this.state.users[i].utype){
               BookService.loggedIn=true;
                    sessionStorage.setItem("userId", this.state.users[i].id);
                    
                   (this.state.utype == 'Admin')? this.props.history.push('/admin'): this.props.history.push('/user');
                 
                    
              }
              else{
                alert("Usertype doesn't match");
              }
            }
            else{
              alert("Incorrect password");
            }
          }
        }
        if(exist == false){
          alert ("Username doesn't exist");
        }   
    })
  }
    render(){
        return(
<div className="login">
    <Card>
    <Card.Header className="pre"><h4>Login</h4></Card.Header>
<Card.Body className="loginn">
<form>
<InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-user"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
  </InputGroup>
  <InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-key"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="password" value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}/>
  </InputGroup>
  <InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-user-circle"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control as="select" value={this.state.utype} onChange={(event)=>this.setState({utype:event.target.value})}>
      <option>Admin</option>
      <option>User</option>
    </Form.Control>
  </InputGroup>
  <Button  type="button" className="pre" onClick={this.login}>Login</Button>
</form>

<div id="signup" className="ig">Don't have an account?  <a href="/register">Sign Up</a></div>
</Card.Body>
    </Card>

</div>
        )
    }
}

export default Login;