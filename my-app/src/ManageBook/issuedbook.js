import React from 'react';
import { Card, Button, Table} from 'react-bootstrap';
import BookService from '../ManageBook/bookservice';
import '../ManageCat/managecat.css';


class Issuedbook extends React.Component {
    state={
        subs:[
        ]
      }
      componentDidMount(){
        BookService.getSubs().then((res)=>{
            this.setState({subs:res.data});})
      }
      backPage=()=>{
        this.props.history.push('/admin');
    }
     
  render(){
      const  category=(
        <div >
            <Table>
                <thead>
                    <tr>
                    <th>User Id</th>
                    <th>Book Id</th>
                    <th>Subscribed Time</th>
                    </tr></thead>
                    <tbody>
                {this.state.subs.map((el)=>{ 
            return (
              <tr>
                  <td>{el.uid}</td>
                  <td>{el.bid}</td>
                  <td>{el.date}</td>
                
              </tr>
            )      
        }) }
       </tbody>
            </Table>
      
    </div>)
        return (
        <div>
            <Card className="manage">
                <Card.Header><h4>Issued Books</h4></Card.Header>
                <Card.Body> {category}
                <Button type="button" onClick={this.backPage}>Back</Button></Card.Body>
            </Card>
           </div>
         
            )
}}

export default Issuedbook;
