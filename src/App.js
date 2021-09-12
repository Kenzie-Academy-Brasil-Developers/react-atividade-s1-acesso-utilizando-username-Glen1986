import GetUserComponent from './components/GetUserComponent'
import WellcomePage from './components/WellcomePage'
import './App.css';
import { useState } from 'react';

function App() {
  const[isLoggedIn, setIsLoggedIn]=useState(false)
  const[userInput, setUserInput]=useState("");
  const[userList, setUserList]=useState([""]);
  return(
  <div>
    {isLoggedIn ?(
     <div className="App">
          <div className="App-header">
            <WellcomePage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userInput = {userInput}
              setUserInput = {setUserInput}
              userList = {userList}
              setUserList = {setUserList}
            ></WellcomePage>
         </div>
        </div>
    ):(
       <div className="App">
          <div className="App-header">
            <GetUserComponent 
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userInput = {userInput}
              setUserInput = {setUserInput}
              userList = {userList}
              setUserList = {setUserList}
            />
         </div>
        </div>  
    )
  }
 </div>
 )
}

export default App;
