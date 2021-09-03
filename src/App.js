import './App.css';
import {useState} from 'react';
import GetUserComponent from './components/GetUserComponent'
import WelcomePage from './components/WelcomePage'

function App() {
  const user = "yo mismo"
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const botin =()=>{
    setIsLoggedIn(
    !isLoggedIn 
    )
  }

    const botout =()=>{
    console.log("logout")
    setIsLoggedIn(
     !isLoggedIn 
    )
  }

  return (
    <div className="App">
      <div className="App-header">
        <GetUserComponent
          user = {user}
          isLoggedIn = {isLoggedIn}
          Logout = {botout}
        />
        <WelcomePage
          user = {user}
          Login = {botin}
        />
     </div>
    </div>
  );
}

export default App;
