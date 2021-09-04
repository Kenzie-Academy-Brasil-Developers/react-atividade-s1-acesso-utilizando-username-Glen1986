import {useState} from 'react';

const GetUserComponent = ({ setUser, setIsLoggedIn }) =>{
  const[userInput, setUserInput] = useState("")

  const HandleLogin = ({user, userInput}) =>{
    console.log(user)
setUser(
 user = userInput
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
    <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
  </form>
</section>
  ) 
}
export default GetUserComponent;
