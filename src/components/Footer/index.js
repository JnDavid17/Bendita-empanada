import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.css";
import location from "../../assets/location.png";
import telephone from "../../assets/telephone.png";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

function Footer() {
  const position = [4.75011, -74.062058];
  return (
    <footer>
      <div className="footer__maps">
        <div className="footer__location">
          <h3>Calle 167 #62-31, Bogotá</h3>
          <div className="footer__location-icon">
            <img src={location} alt="location icon"></img>
          </div>
        </div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={position}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>Hola no c que decir aqui</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="footer__contacts">
        <div className="footer__telephone">
          <div className="footer__telephone-icon">
            <img src={telephone} alt="telephone icon"></img>
          </div>
          <h3>+57 3158240714</h3>
        </div>
        <div className="footer__email">
          <div className="footer__email-icon">
            <img src={email} alt="email icon"></img>
          </div>
          <h3>canaldeventas@benditasempanadas.com</h3>
        </div>
      </div>

      <div className="footer__virtual-contacts">
        <div className="footer__newsleatter">
          <form className="footer__form" onSubmit="">
            <div className="footer__input-div">
              <input type="text" class="footer-newsleatter__input" required />
              <span className="footer__line"></span>
              <label className="footer__text-input" for="">
                Newsleatter
              </label>
            </div>

            <button class="footer__button" type="submit">
              Suscribirse
            </button>
          </form>
        </div>
        <div className="footer__social-media">
          <div className="footer__facebook-icon">
            <a href="#">
              <img src={facebook} alt="facebook icon"></img>
            </a>
          </div>

          <div className="footer__twitter-icon">
            <a href="#">
              <img src={twitter} alt="twitter icon"></img>
            </a>
          </div>

          <div className="footer__instagram-icon">
            <a href="#">
              <img src={instagram} alt="instagram icon"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };