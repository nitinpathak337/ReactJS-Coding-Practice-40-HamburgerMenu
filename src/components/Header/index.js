// Write your code here
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link to="/" className="link-logo">
      <img
        className="nav-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" className="menu-button">
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      position="center center"
    >
      {close => (
        <>
          <div className="close-container">
            <button type="button" className="menu-button" onClick={close}>
              <IoMdClose className="close-icon" />
            </button>
          </div>
          <ul className="popup-container">
            <li>
              <Link to="/" className="link">
                <AiFillHome className="home-icon" />
                <p className="para">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <BsInfoCircleFill className="home-icon" />
                <p className="para">About</p>
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
