import {useState} from 'react';

const GetUserComponent = ({ setUser, setIsLoggedIn }) =>{
  const[userInput, setUserInput] = useState("")

  const HandleLogin = ({isLoggedIn,user,setUser, userInput}) =>{
    setIsLoggedIn(
     isLoggedIn=true
  )
    setUser(
    user = {userInput}
  )
 }

  return(
<section>
  <form>
   <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}

       /><br/>    
  </form>
    <button href='#' onClick={(e) => HandleLogin(userInput)}>Acessar com o nome</button>
</section>
  ) 
}
export default GetUserComponent;
