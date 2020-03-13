import React, {Component} from 'react';
import {Card, Button, Row, Col, FormControl} from 'react-bootstrap';

import './addbook.css';
import axios from 'axios';
class Addbook extends Component{
    state={
        bname: '',
        categoty:'',
        author:'',
        price:'',
        quantity:''
    }

    postBook= () =>{
const book = {
    bname: this.state.bname,
        categoty:this.state.categoty,
        author:this.state.author,
        price:this.state.price,
        quantity:this.state.quantity
};

axios.post('http://localhost:8080/Books/manage/',book)
.then(()=>{alert("Book Added successfully");
this.props.history.push('/admin/managebook');
}
)
    }
    backPage=()=>{
        this.props.history.push('/admin');
    }
    render(){
        return(
<div className="addcat">
    <Card>
    <Card.Header className="pre"><h4>Add Book</h4></Card.Header>
<Card.Body className="loginn">

<Card.Text className="bdetail">Book Name </Card.Text>
<FormControl type="text" value={this.state.bname} onChange={(event) => this.setState({bname: event.target.value})}/>
<Card.Text className="bdetail">Category</Card.Text> <FormControl type="text" value={this.state.categoty} onChange={(event) => this.setState({categoty: event.target.value})}/>
<Card.Text className="bdetail">Author</Card.Text> <FormControl type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
<Card.Text className="bdetail">Price</Card.Text> <FormControl type="number" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})}/>
<Card.Text className="bdetail">Quantity </Card.Text><FormControl type="number" value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})}/>
<Row className="btns">
    <Col><Button className="pre" type="button" onClick={this.backPage}>Back</Button>
    </Col>
    <Col><Button className="pre" type="button" onClick={this.postBook}>Add</Button></Col>
</Row>

</Card.Body>
    </Card>

</div>
        )
    }
}

export default Addbook;