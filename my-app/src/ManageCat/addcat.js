import React, {Component} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import './addCat.css';
import axios from 'axios';

class Addcat extends Component{
    state={
cname:''
    }
    backPage=()=>{
        this.props.history.push('/admin');
    }
    addCatg= () =>{
        const cat = {
            cname: this.state.cname
        };
        
        axios.post('http://localhost:8080/Categories/manage/',cat)
        .then(()=>{alert("Category Added successfully");
        this.props.history.push('/admin/managecat');
        }
        )
            }
    render(){
        return(
<div className="addcat">
    <Card>
    <Card.Header className="pre"><h4>Add Category</h4></Card.Header>
<Card.Body className="loginn">

Category Name <input type="text" value={this.state.cname} onChange={(event)=>this.setState({cname:event.target.value})}/>
<Row className="btns">
    <Col><Button  className="pre" type="button" onClick={this.backPage}>Back</Button>
    </Col>
    <Col><Button className="pre" type="button" onClick={this.addCatg}>Add</Button></Col>
</Row>

</Card.Body>
    </Card>

</div>
        )
    }
}

export default Addcat;