import React from "react";
import styles from './UserList.module.css'
import Card from "../UI/Card";
export default function UserList(props) {

  return(
    <Card className={styles.users}>
        <ul>
           {
      props.items.map((detail) => {
        return <li key={Math.random().toString()}>{detail.name} ({detail.age} years old)</li>
      })

      }
      </ul>
    </Card>
  )

    
}

        
     
 
 
