import React,{useState, useRef} from "react";
import './AddUsers.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUsers(props){
const nameInputRef = useRef();
const ageInputRef = useRef();
const [error, setError] = useState();

const submitHandle = (e) => {
    e.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if((enteredUsername.trim() && enteredAge.trim()).length === 0) {
        setError({
            title: 'Invalid Input',
            message: 'Please entered valid username and age (non-empty fields).'
        })
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
nameInputRef.current.value = ''
ageInputRef.current.value = ''

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
        <label>username</label>
        <input ref={nameInputRef}   type='text'  /> 
        <label >Age (years)</label>   
        <input ref={ageInputRef} type='number' />
        </div> 
        <Button type='submit'>Add user</Button>
        </form>   
        </Card>
        </>
    );
}