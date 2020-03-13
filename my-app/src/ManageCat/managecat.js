import React from 'react';
import { Card, Button, Table} from 'react-bootstrap';
import BookService from '../ManageBook/bookservice';
import './managecat.css';


class Managecat extends React.Component {
    state={
        catg:[
        ]
      }

      editCatg=(idd)=>{
        this.props.history.push('/admin/editcat/'+idd);
    
    }
    deleteCatg=(idd)=>{
        BookService.deleteCatg(idd)
        .then(()=>{ 
            alert("Category deleted successfully");
            BookService.getCatg()
            .then(response => {
                this.setState({catg: response.data});
            })
        }
        )
        
    }
      backPage=()=>{
        this.props.history.push('/admin');
    }

    componentDidMount(){
 
        BookService.getCatg()
        .then(response => {
            this.setState({catg: response.data});
        })
       }

     
  render(){
      const  category=(
        <div >
            <Table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Options</th>
                    </tr></thead>
                    <tbody>
                {this.state.catg.map((el)=>{ 
            return (
              <tr>
                  <td>{el.id}</td>
                  <td>{el.cname}</td>
                  <td>
                      <Button className="btn" className="pre"onClick={()=>this.editCatg(el.id)}><i className="fa fa-pencil-alt"></i></Button>
                      <Button className="btn" className="pre"onClick={()=>this.deleteCatg(el.id)}><i className="fa fa-trash-alt"></i></Button>
                      
                  </td>
              </tr>
            )      
        }) }
       </tbody>
            </Table>
      
    </div>)
   
        return (
        <div>
            <Card className="manage">
                <Card.Header className="pre "><h4>Manage Categories</h4></Card.Header>
                <Card.Body> {category}
                <Button type="button" className="pre" onClick={this.backPage}>Back</Button></Card.Body>
            </Card>
           </div>
         
            )
}}

export default Managecat;
