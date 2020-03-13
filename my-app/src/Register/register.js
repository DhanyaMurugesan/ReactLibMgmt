import React, {Component} from 'react';
import { Form, Button, InputGroup, Card} from 'react-bootstrap';
import './register.css';
import axios from 'axios';

class Register extends Component{
  state={
    name:'',
    email:'',
    password:'',
    cpassword:'',
    utype:'',
    mobile:''
  }

  registerUser=()=>{
    if(this.state.password == this.state.cpassword){
      const user = {
        name: this.state.name,
            email:this.state.email,
            password:this.state.password,
            utype:this.state.utype,
            mobile:this.state.mobile
    };
      axios.post('http://localhost:8080/Users/manage/',user)
      .then(()=>{alert("Registered successfully");
      this.props.history.push('/login');
    })
    
  }
else{
  alert("password didn't match");
}
}
    render(){
        return(
<div className="register">
    <Card>
    <Card.Header className="pre">Register</Card.Header>
<Card.Body className="loginn">
<form>
<InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-user"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="text" placeholder="Fullname"  value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
  </InputGroup>
<InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-envelope"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="email" placeholder="name@example.com"  value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
  </InputGroup>
  <InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-key"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="password" placeholder="Password"  value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}/>
  </InputGroup>
  <InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-key"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="password" placeholder="Confirm Password"  value={this.state.cpassword} onChange={(event)=>this.setState({cpassword:event.target.value})}/>
  </InputGroup>
  <InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre"><i className="fa fa-user-circle"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control as="select"  value={this.state.utype} onChange={(event)=>this.setState({utype:event.target.value})}>
      <option>Admin</option>
      <option>User</option>
    </Form.Control>
  </InputGroup>
  <InputGroup className="ig">
    <InputGroup.Prepend>
      <InputGroup.Text className="pre" ><i className="fa fa-phone"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="tel" placeholder="10 digit mobile number"  value={this.state.mobile} onChange={(event)=>this.setState({mobile:event.target.value})}/>
  </InputGroup>
  <Button  type="button" className="pre" onClick={this.registerUser}>Sign Up</Button>
</form>

<div id="signup" className="ig">Have an account?  <a href="/login">Login</a></div>
</Card.Body>
    </Card>

</div>
        )
    }
}

export default Register;