import './App.css';
import {useState} from 'react';
import GetUserComponent from './components/GetUserComponent'
import WelcomePage from './components/WelcomePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("")

  if(isLoggedIn === false){
    return(
  <div className="App">
      <div className="App-header">
        <GetUserComponent
              user = {user}
              setUser ={setUser}
              isLoggedIn = {isLoggedIn}
              setIsLoggedIn = {setIsLoggedIn}
            />
      </div>
    </div>  
    )
  }else{
    return(

 <div className="App">
      <div className="App-header">
       <WelcomePage
          user = {user}
          setUser ={setUser}
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
        />
     </div>
    </div>
    )
  } 
}

export default App;
