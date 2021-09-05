
const GetUserComponent =({setIsLoggedIn, userInput, setUserInput, userList, setUserList})=>{

  const HandleLogin=()=>{
    setUserList([userList = userInput])
    setUserInput("")
    setIsLoggedIn(true)
  }
  return (
  <form>
    <h2>your name</h2>
    <h3>{userInput}</h3>
    <input value={userInput}
           onChange={e=>setUserInput(e.target.value)} 
             type="text" /> <br/>
   <button href="#" onClick={(e) => HandleLogin(userInput)}>Acessar com o nome</button>
 
  </form>
  )

}
export default GetUserComponent;
