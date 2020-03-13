import React from 'react';
import { Card, Button, ListGroup,ListGroupItem, InputGroup} from 'react-bootstrap';
import BookService from './bookservice';
import '../User/user.css';
import './addbook.css';


class Managebook extends React.Component {
    state={
        books:[ ],
        filtered:[],
        search:''
      }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
componentDidMount(){
 
 BookService.getBooks()
 .then(response => {
     this.setState({books: response.data});
     this.setState({filtered:this.state.books})
     
     
 })
}
editBook=(idd)=>{
    this.props.history.push('/admin/editbook/'+idd);
}
deleteBook=(idd)=>{
    BookService.deleteBook(idd)
    .then(()=>{ 
        alert("Book deleted successfully");
        BookService.getBooks()
        .then(response => {
            this.setState({books: response.data});
            
            
        })
    
    }
    )
    
}
backPage=()=>{
    this.props.history.push('/admin');
}

handleChange=(e)=>{
this.setState({search:e.target.value});
let original=[...this.state.books];
if(e.target.value != ''){
    let filterr=original.filter(item=> {
        return item.bname.toLowerCase().search(
          e.target.value.toLowerCase()) !== -1;
      });
      this.setState({filtered: filterr});
}
else{
    this.setState({filtered: original}); 
}

 
}

  render(){
 
    const category=(
        <div >
            <ul>
                {this.state.filtered.map((el)=>{ 
            return (
              <li>  <Card>
    <Card.Header className="pre">
    <h4>{el.bname}</h4>
    </Card.Header>
    <Card.Body className="loginn">
      <ListGroup className="backgnd">
          
          <ListGroupItem className="calign">
          <Card.Text className="alig">Category: </Card.Text>
          {el.categoty}
          </ListGroupItem>
          <ListGroupItem className="calign">
          <Card.Text className="alig">Author: </Card.Text>
          {el.author}
          </ListGroupItem>
          <ListGroupItem className="calign">
          <Card.Text className="alig">Price: </Card.Text>
          {el.price}
          </ListGroupItem>
      </ListGroup>
      <Button className="btn"className="pre" onClick={()=>this.editBook(el.id)}><i className="fa fa-pencil-alt"></i></Button>
                      <Button className="btn" className="pre" onClick={()=>this.deleteBook(el.id)}><i className="fa fa-trash-alt"></i></Button>
    </Card.Body>
    
    </Card></li>
            )      
        }) }
       
            </ul>
      
    </div>)
    
      
        return (
        <div>
            <InputGroup className="ig">
                  <InputGroup.Prepend>
                  <InputGroup.Text className="pre"><i className="fa fa-search"></i></InputGroup.Text>
                   </InputGroup.Prepend>
                <input type="text" placeholder="Name/Category/author.." value={this.state.search} onChange={this.handleChange}/>
                <Button className="btn" className="pre" onClick={this.backPage}>Back</Button>
  </InputGroup>
            <Card className="dashboard">
                <Card.Header><h4>Book Lists</h4></Card.Header>
                <Card.Body> {category}</Card.Body>
            </Card>
           </div>
         
            )
}}

export default Managebook;
