import React from "react";
import './UserList.css'
import Card from "../UI/Card";
export default function UserList(props) {

  return(
    <Card className='design'>
        <ul>
           {
      props.items.map((detail) => {
        return <li key={Math.random().toString()}>{detail.username} ({detail.age} years old)</li>
      })

      }
      </ul>
    </Card>
  )

    
}

        
     
 
 
