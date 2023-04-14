import React,{useState} from "react";
import './AddUsers.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUsers(props){

const [enteredUsername, setUsername] = useState('');
const [enteredAge, setAge] = useState('');
const [isValid, setIsValid] = useState(false);

const usernameHandle = (e) => {
    setIsValid(false)
    setUsername(e.target.value);
}
const ageHandle = (e) => {
    setIsValid(false)
    setAge(e.target.value);
}
const submitHandle = (e) => {
    e.preventDefault();
    if((enteredUsername.trim() && enteredAge.trim()).length === 0) {
        setIsValid(true);
        return;
    }
   
const details = {
    username: enteredUsername,
    age: enteredAge,
    id: Math.random().toString()
};

props.addHandle(details);
setUsername('');
setAge('');
    }
    
    return(
        <Card className="container">
         <form onSubmit={submitHandle}>
            <div className="form-control">
        <label style={{color: isValid ? 'red' : 'black'}}>username</label>
        <input style={{border: isValid ? '1px solid red' : '1px solid #ccc'}}  type='text' value={enteredUsername} onChange={usernameHandle} /> 
        <label style={{color: isValid ? 'red' : 'black'}}>Age (years)</label>   
        <input style={{border: isValid ? '1px solid red' : '1px solid #ccc'}} type='number' value={enteredAge} min='0' onChange={ageHandle}/>
        </div> 
        <Button type='submit'>Add</Button>
        </form>   
        </Card>
        
    );
}