const WelcomePage = ({ user, setIsLoggedIn }) => {
  return(
  <section>
    <div>
      <input type="text" value = {user} />
    </div>
    <button>login</button>
    </section>
  )
}
export default WelcomePage;
