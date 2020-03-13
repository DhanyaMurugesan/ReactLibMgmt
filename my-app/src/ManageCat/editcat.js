import React, {Component} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import './addCat.css';
import axios from 'axios';
import BookService from '../ManageBook/bookservice';

class Editcat extends Component{
    state={
        cname:'',
        cat:null
    }
    componentDidMount(){

        if( !this.state.cat || (this.state.cat && this.state.cat.id != this.props.match.params.id)){
            BookService.getCat(this.props.match.params.id)
            .then(response=>  this.setState({cat:response.data}))
            .then(()=>{
                this.setState({cname: this.state.cat.cname});
        
            })
        }
        }
        backPage=()=>{
            this.props.history.push('/admin/managecat');
        }
        save=()=>{
            const upcat = {
                cname: this.state.cname
            };
                    
            axios.put(`http://localhost:8080/Categories/manage/${this.state.cat.id}`,upcat)
            .then(()=>{alert("Category Updated successfully");  
            })}


    render(){
        return(
<div className="addcat">
    <Card>
    <Card.Header className="pre"><h4>Edit Category</h4></Card.Header>
<Card.Body className="loginn">

Category Name <input type="text" value={this.state.cname} onChange={(event) => this.setState({cname: event.target.value})}/>
<Row className="btns">
    <Col><Button  className="pre" type="button" onClick={this.backPage}>Back</Button>
    </Col>
    <Col><Button  className="pre" type="button" onClick={this.save}>Save</Button></Col>
</Row>
  



</Card.Body>
    </Card>

</div>
        )
    }
}

export default Editcat;