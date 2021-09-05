const WellcomePage = ({setIsLoggedIn,  userList}) =>{
  const HandleLogout = () =>{
    setIsLoggedIn(false)
  }
  return(
  <section>
    <div>
      {userList.map((name, index)=><div key={index} id={index}>olá {name}, que sejas bemvindo</div>)}
    </div>
    <button onClick ={HandleLogout}>sair</button>

  </section>

  )
}
export default WellcomePage
