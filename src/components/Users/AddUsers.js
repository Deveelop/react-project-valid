import React,{useState} from "react";
import './AddUsers.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUsers(props){
const [enteredUsername, setUsername] = useState('');
const [enteredAge, setAge] = useState('');
const usernameHandle = (e) => {
    setUsername(e.target.value);
}
const ageHandle = (e) => {
    setAge(e.target.value);
}
    const submitHandle = (e) => {
    e.preventDefault();

const details = {
    username: enteredUsername,
    age: enteredAge
};
console.log(details);
setUsername('');
setAge('');
    }
    
    return(
        <Card className="container">
         <form onSubmit={submitHandle}>
            <div className="form-control">
        <label>username</label>
        <input type='text' value={enteredUsername} onChange={usernameHandle} /> 
        <label>Age (years)</label>   
        <input type='number' value={enteredAge} min='0' onChange={ageHandle}/>
        </div> 
        <Button type='submit'>Add</Button>
        </form>   
        </Card>
        
    );
}