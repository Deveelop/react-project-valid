import React,{useState} from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";


function App() {
const [addUser, setAddUser] = useState([]);
const [shoow, setShoow] = useState(false);
const onAdding = (uName, uAge) => {
setAddUser(prevUser => {
  return [...prevUser, {name:uName, age:uAge}]
});
setShoow(true);
}


  return (
    <div>
      <AddUsers addHandle = {onAdding} />
    {shoow && <UserList items={addUser}/>}
     </div> 
  );
}

export default App;
