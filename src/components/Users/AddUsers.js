import React,{useState} from "react";
import './AddUsers.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUsers(props){

const [enteredUsername, setUsername] = useState('');
const [enteredAge, setAge] = useState('');
const [isValid, setIsValid] = useState(false);
const [error, setError] = useState();
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
        setError({
            title: 'Invalid Input',
            message: 'Please entered valid username and age (non-empty fields).'
        })
        setIsValid(true);
        return;
    }
    if( +enteredAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter valid age (> 0).'
        })
        return;
    }
   
props.addHandle(enteredUsername, enteredAge);
setUsername('');
setAge('');
    }
    const errorHandle = () => {
        setError(null);
    }
    
    return(
        <>
        {error && <ErrorModal onConfirm ={errorHandle} title={error.title} message={error.message} />}
        <Card className="container">
         <form onSubmit={submitHandle}>
            <div className="form-control">
        <label style={{color: isValid ? 'red' : 'black'}}>username</label>
        <input style={{border: isValid ? '1px solid red' : '1px solid #ccc'}}  type='text' value={enteredUsername} onChange={usernameHandle} /> 
        <label style={{color: isValid ? 'red' : 'black'}}>Age (years)</label>   
        <input style={{border: isValid ? '1px solid red' : '1px solid #ccc'}} type='number' value={enteredAge} onChange={ageHandle}/>
        </div> 
        <Button type='submit'>Add user</Button>
        </form>   
        </Card>
        </>
    );
}