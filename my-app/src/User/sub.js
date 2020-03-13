import React from 'react';
import {Button} from 'react-bootstrap';
import './user.css';
const Sub=(props)=>{
    
        for(let j=0;j<props.subs.length;j++){
            if(props.book == props.subs[j].bid){
              
                return (
                  
                    <Button  className="btn pre" type="button" onClick={()=>props.unsub(props.subs[j].id)}>Unsubscribe</Button>
                )
            }
    }
    if(props.quan == 0){
        return ( <Button  className="btn pre" type="button" disabled>Subscribe</Button>)
    }
    
    return ( <Button  className="btn pre" type="button" onClick={props.clicked}>Subscribe</Button>)
}

export default React.memo(Sub);