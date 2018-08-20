import React from 'react'
import Link from 'gatsby-link'

//import github from '../img/github-icon.svg'
import logo from '../img/lcs.png'
//import logo from '../img/lcs-logo.svg'
//  <img src={logo} alt="Life Cell Science" style={{ width: "100%", height: "auto"}} />

class Navbar extends React.Component {
  state = {
    showMenu: false
  }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render(){
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} />
          </Link>
          <a role="button" className={`navbar-burger burger ${burgerActive}`} aria-label="menu" aria-expanded="false"
            onClick={this.toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${menuActive}`} >
          <div className="navbar-start" >
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/physics">
              Physics
            </Link>
            <Link className="navbar-item" to="/maths">
              Maths
            </Link>
            <Link className="navbar-item" to="/chemistry">
              Chemistry
            </Link>
            <Link className="navbar-item" to="/biology">
              Biology
            </Link>
            <Link className="navbar-item" to="/sciencelab">
              Science Lab
            </Link>

            <Link className="navbar-item" to="/library">
              Library
            </Link>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
