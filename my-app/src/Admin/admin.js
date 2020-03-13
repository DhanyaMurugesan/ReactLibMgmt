import React from 'react';
import { Card, Row, Col, Button} from 'react-bootstrap';
import './admin.css';
import {Redirect} from 'react-router-dom';


class Admin extends React.Component {
    state={
        options:[{name:"Categories",icon:"fa fa-list-alt"},
        {name:"Books",icon:"fa fa-book"}],
       
      }
    manage=(name)=>{
        if(name == "Categories"){
            this.props.history.push('/admin/managecat')
        }
          else{
            this.props.history.push('/admin/managebook') 
          }
    }

  add=(name)=>{
      if(name == "Categories"){
        this.props.history.push('/admin/addcat')  
      }
        else{
            this.props.history.push('/admin/addbook')
        }
  }
  view=()=>{
      this.props.history.push('/admin/viewissued')
  }
      category=(
      <div >
          <ul>
              {this.state.options.map((el)=>{ 
          return (
            <li>  <Card>
<Card.Header className="pre">
<h4>{el.name}</h4>
<h2><i class={el.icon}></i></h2>
</Card.Header>
<Card.Body className="loginn">
<Row>
<Col><Button className="pre" onClick={()=>this.manage(el.name)}>Manage</Button></Col>
<Col><Button className="pre" onClick={()=>this.add(el.name)}><i class="fa fa-plus"></i></Button></Col>

</Row>
</Card.Body>
</Card></li>
          )      
      }) }
      <li>
      <Card>
<Card.Header className="pre">
<h4>Issued Books</h4>
<h2><i class="fa fa-book"></i></h2>
</Card.Header>
<Card.Body className="loginn">

<Button onClick={this.view} className="pre">View</Button>
</Card.Body>
</Card>    
      </li>
          </ul>
    
  </div>)
  render(){
   
        return (
        <div>
        
            <Card className="dashboard">
                <Card.Header className="loginn"><h4>Dashboard</h4></Card.Header>
                <Card.Body> {this.category}</Card.Body>
            </Card>
           </div>
         
            )
}}

export default Admin;
