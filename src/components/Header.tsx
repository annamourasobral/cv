const Header = () => {
  return (
    <div id="profile">
      <h1>Anna Luiza de Moura Sobral</h1>
      <h1>Software Engineer</h1>
      <div className="row space">
        <div className="column">
          <p>Email:annamourasobral@gmail.com</p>
          <p>Phone: +34 657 02 24 82</p>
        </div>
        <div className="column">
          <p>
            Linkedin:{" "}
            <a href="https://linkedin.com/in/annamourasobral" target="_blank">
              linkedin.com/in/annamourasobral
            </a>
          </p>
          <p>
            Github: <a href="https://github.com/annamourasobral">github.com/annamourasobral</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
