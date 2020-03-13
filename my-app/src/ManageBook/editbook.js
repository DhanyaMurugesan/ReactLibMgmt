import React, {Component} from 'react';
import {Card, Button, Row, Col, FormControl} from 'react-bootstrap';
import './addbook.css';
import axios from 'axios';
import BookService from './bookservice';
import './addbook.css'
class Editbook extends Component{
    state={
        bname: '',
        categoty:'',
        author:'',
        price:'',
        quantity:'',
        book:null
    }
    componentDidMount(){

        if( !this.state.book || (this.state.book && this.state.book.id != this.props.match.params.id)){
            BookService.getBook(this.props.match.params.id)
            .then(response=>  this.setState({book:response.data}))
            .then(()=>{
                this.setState({bname: this.state.book.bname});
                this.setState({categoty: this.state.book.categoty});
                this.setState({author: this.state.book.author});
                this.setState({price: this.state.book.price});
                this.setState({quantity: this.state.book.quantity});
            })
               
        }
        
        }
    
    backPage=()=>{
        this.props.history.push('/admin/managebook');
    }
    save=()=>{
        const upbook = {
            bname: this.state.bname,
                categoty:this.state.categoty,
                author:this.state.author,
                price:this.state.price,
                quantity:this.state.quantity};
        axios.put(`http://localhost:8080/Books/manage/${this.state.book.id}`,upbook)
.then(()=>{alert("Book Updated successfully");

    })}
    render(){
       
        return(
<div className="addcat">
    <Card>
    <Card.Header className="pre"><h4>Edit Book</h4></Card.Header>
<Card.Body className="loginn">

<Card.Text className="bdetail">Book Name </Card.Text>
<FormControl type="text" value={this.state.bname} onChange={(event) => this.setState({bname: event.target.value})}/>
<Card.Text className="bdetail">Category</Card.Text> <FormControl type="text" value={this.state.categoty} onChange={(event) => this.setState({categoty: event.target.value})}/>
<Card.Text className="bdetail">Author</Card.Text> <FormControl type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
<Card.Text className="bdetail">Price</Card.Text> <FormControl type="number" value={this.state.price} onChange={(event) => this.setState({price: event.target.value})}/>
<Card.Text className="bdetail">Quantity </Card.Text><FormControl type="number" value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})}/>
<Row className="btns">
    <Col><Button  className="pre" type="button" onClick={this.backPage}>Back</Button>
    </Col>
    <Col><Button className="pre" type="button" onClick={this.save}>Save</Button></Col>
</Row>

</Card.Body>
    </Card>

</div>
        )
    }
}

export default Editbook;