import React from "react";
import './AddUsers.css';
import Card from "../UI/Card";
export default function AddUsers(props){
    return(
        <Card className="container">
         <form>
            <div className="form-control">
        <label>username</label>
        <input type='text' /> 
        <label>Age (years)</label>   
        <input type='number' min='0'/>
        </div> 
        <button>Add</button>   
        </form>   
        </Card>
    );
}