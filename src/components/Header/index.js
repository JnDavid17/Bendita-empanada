import React from 'react'
import "./index.css"
import logo from '../../assets/logo.jpg'

function Header() {
  return (
    <header>
      <div className="header__logo">
        <img src={logo}></img>
      </div>

      <div className="header__infoAndIcon">
        <div className="header__info">
          <div className="header__info--phone">
            <img src="https://img.icons8.com/ios/20/undefined/phone.png" />
            <h4>3158240714</h4>
          </div>
          <div className="header__info--location">
            <img src="https://img.icons8.com/ios/20/undefined/marker--v1.png" />
            <h4>Calle 167 #62-31, Bogotá</h4>
          </div>
        </div>

        <div className="header__icon">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <div className="menu">
              <li>
                <a href="#">
                  <h4>Home</h4>
                </a>
              </li>

              <li>
                <a href="#welcome-div" >
                  <h4>Empresa</h4>
                </a>
              </li>

              <li>
                <a href="#products-div">
                  <h4>Productos</h4>
                </a>
              </li>

              <li>
                <a href="#contact-div">
                  <h4>Contacto</h4>
                </a>
              </li>
          </div>
        </div>
      </div>
    </header>
  );
}

export {Header}