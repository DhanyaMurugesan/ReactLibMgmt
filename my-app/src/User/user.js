import React from 'react';
import { Card, Button, ListGroup,ListGroupItem, InputGroup} from 'react-bootstrap';
import './user.css';
import BookService from '../ManageBook/bookservice';
import Sub from './sub';
import axios from 'axios';

class User extends React.Component {
    state={
        books:[ ],
        subs:[],
      bid:'',
      uid:'',
      date:null,
      subUser:[],
 filtered:[],
 search:''
      }
     
componentDidMount(){
 
 BookService.getBooks()
 .then(response => {
     this.setState({books: response.data});
     this.setState({filtered:this.state.books})
     BookService.getSubs().then((res)=>{
         this.setState({subs:res.data});
         for(let i=0;i<this.state.subs.length;i++){
           if(this.state.subs[i].uid == sessionStorage.getItem("userId")){
               this.setState({subUser: [...this.state.subUser,this.state.subs[i]]})
           }
         }
        
     })
     
 })
} 

unsubs=(idd, ele)=>{
    let quan=ele.quantity+1;
    const upbook = {
        bname: ele.bname,
            categoty:ele.categoty,
            author:ele.author,
            price:ele.price,
            quantity:quan};
  
   BookService.deleteSub(idd)
   .then(()=>{alert("Unsubscribed");
   axios.put('http://localhost:8080/Books/manage/'+ ele.id,upbook);

   BookService.getSubs().then((res)=>{
    this.setState({subs:res.data});
    for(let i=0;i<this.state.subs.length;i++){
      if(this.state.subs[i].uid == sessionStorage.getItem("userId")){
          this.setState({subUser: [...this.state.subUser,this.state.subs[i]]})
      }
    }
   
})
})  
}
subsc=(ele)=>{
  
    const newSub={
        uid: sessionStorage.getItem("userId"),
        bid: ele.id,
        date: new Date()
    };
    let quan=ele.quantity-1;
    const upbook = {
        bname: ele.bname,
            categoty:ele.categoty,
            author:ele.author,
            price:ele.price,
            quantity:quan};
  

axios.post('http://localhost:8080/Subscribed/manage/', newSub)
.then(()=>{
    alert("Subscribed Successfully");
    axios.put('http://localhost:8080/Books/manage/'+ ele.id,upbook)

    BookService.getSubs().then((res)=>{
        this.setState({subs:res.data});
        for(let i=0;i<this.state.subs.length;i++){
          if(this.state.subs[i].uid == sessionStorage.getItem("userId")){
              this.setState({subUser: [...this.state.subUser,this.state.subs[i]]})
          }
        }
       
    })
}  )}

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
  
  
      const  category=(
          
        <div >
            <ul>
                {this.state.filtered.map((el)=>{ 
                        
            return (
              <li>  <Card>
  <Card.Header className="pre">
  <h4>{el.bname}</h4>
  </Card.Header>
  <Card.Body className="loginn">
      <ListGroup>
          
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
   <Sub book={el.id} quan={el.quantity} subs={this.state.subUser} clicked={()=>this.subsc(el)} unsub={(did)=>this.unsubs(did,el)}/>

  </Card.Body>
  
  </Card></li>
            )   }   
        ) }
       
            </ul>
      
    </div>)

     return (
        <div>
            <InputGroup className="ig">
                  <InputGroup.Prepend>
                  <InputGroup.Text className="pre"><i className="fa fa-search"></i></InputGroup.Text>
                   </InputGroup.Prepend>
                <input type="text" placeholder="Name/Category/author.." value={this.state.search} onChange={this.handleChange}/>
  </InputGroup>
            <Card className="dashboard">
                <Card.Header><h4>Book Lists</h4></Card.Header>
                <Card.Body > {category}</Card.Body>
            </Card>
           </div>
         
            )
}}

export default User;
