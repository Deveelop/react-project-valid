import React,{useState} from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";


function App() {
  const listUser = [
    
];
const [addUser, setAddUser] = useState(listUser);

const onAdding = (lists) => {
setAddUser(prevUser => {
  return [lists, ...prevUser]
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
