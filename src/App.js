// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import {io} from "socket.io-client";
import React  from "react";
// import Login from "./components/Login";
// import Chat from "./components/Chat";
import Main from "./components/Main";

const socket = io("http://localhost:4000")
function App() 
{ 
  //   const[newUser,setNewUser] = useState("");
  //   const [user,setUser] = useState("");
  //   const[message,setMessage] = useState("");
  //         function handleChange ({currentTarget:input}){
  //           setNewUser(input.value);
  //         }
  //       function logNewUser () {
  //               setUser(newUser);
  //       }
  //       function logNewUser(){
  //         setUser(newUser);
  //       }
  //  return (
  //   <>
  //   <main className="content">
  //   <div className="container mt-3">
  //     {user && 
  //     <Chat 
  //      user = {user}/>
  //     }
        
  //     {!user &&
  //         (<Login
  //           newUser={newUser} 
  //           handleChange={handleChange} 
  //           logNewUser={logNewUser}
  //           />
  //         )
  //     }
     
  //   </div>
  // </main>
// </>
return (
  <Main socket={socket} />
)
  

}

export default App;
