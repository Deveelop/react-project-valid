import React,{useState} from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";


function App() {
const [addUser, setAddUser] = useState([]);

const onAdding = (uName, uAge) => {
setAddUser(prevUser => {
  return [...prevUser, {name:uName, age:uAge}]
});
}
  return (
    <div>
      <AddUsers addHandle = {onAdding} />
      <UserList items={addUser}/>
     </div> 
  );
}

export default App;
