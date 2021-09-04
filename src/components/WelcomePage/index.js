const WelcomePage = ({ user, setIsLoggedIn }) => {

  const HandleLogout = ({isLoggedIn}) => {
 setIsLoggedIn(
 isLoggedIn = false
  );
}
  return(
  <section>
    <div>
      <h1>Hola que tal, {user}</h1>
    </div>
    <button onClick = {HandleLogout}>sair</button>
  </section>
  )
}
export default WelcomePage;
