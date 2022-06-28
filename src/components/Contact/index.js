import React from "react";
import "./index.css";

function Contact() {



  return (
    <div className="container-contact">
      <h1> Contacto </h1>
      <div className="container-contact__text-form">
        <div className="container-contact__text">
          <p className="first-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            eros vel augue molestie semper vel pellentesque velit. Sed id massa
            id neque consectetur dictum. Nulla massa massa, ultricies nec
            imperdiet vitae, tempor sit amet nisi. Integer magna augue, mattis
            vitae dapibus at, varius ac justo. Vestibulum eleifend vulputate
            posuere. Vestibulum in mattis quam. Vestibulum sodales tellus
            ligula, sed dictum metus imperdiet sit amet. Nunc pharetra eros
            libero, consectetur sollicitudin eros faucibus nec. Nulla molestie
            erat in libero egestas finibus. Suspendisse cursus gravida luctus.
            Nulla tincidunt gravida risus in faucibus. Aliquam erat volutpat.
            Phasellus mattis et nulla quis consequat.
          </p>

          <p className="second-paragraph">
            Vestibulum feugiat pellentesque metus. Aliquam suscipit metus non
            justo tincidunt consectetur. Proin nec erat nec odio ultrices
            tincidunt. In volutpat neque nec justo gravida, et auctor arcu
            scelerisque. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Proin aliquet enim placerat,
            efficitur dolor a, dapibus elit. Suspendisse finibus ante ut
            molestie imperdiet. Suspendisse sem ante, cursus a pellentesque et,
            bibendum nec felis. Etiam fringilla lorem turpis.
          </p>

          <p className="third-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec eros vel augue molestie semper vel pellentesque velit. Sed id
              massa id neque consectetur dictum. Nulla massa massa, ultricies
              nec imperdiet vitae, tempor sit amet nisi. Integer magna augue,
              mattis vitae dapibus at, varius ac justo. Vestibulum eleifend
              vulputate posuere. Vestibulum in mattis quam. Vestibulum sodales
              tellus ligula, sed dictum metus imperdiet sit amet. Nunc pharetra
              eros libero, consectetur sollicitudin eros faucibus nec. Nulla
              molestie erat in libero egestas finibus. Suspendisse cursus
              gravida luctus. Nulla tincidunt gravida risus in faucibus. Aliquam
              erat volutpat. Phasellus mattis et nulla quis consequat.
            </p>

            <p className="four-paragraph">
              Vestibulum feugiat pellentesque metus. Aliquam suscipit metus non
              justo tincidunt consectetur. Proin nec erat nec odio ultrices
              tincidunt. In volutpat neque nec justo gravida, et auctor arcu
              scelerisque. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Proin aliquet enim
              placerat, efficitur dolor a, dapibus elit. Suspendisse finibus
              ante ut molestie imperdiet. Suspendisse sem ante, cursus a
              pellentesque et, bibendum nec felis. Etiam fringilla lorem turpis.
            </p>
        </div>
        <div className="container-contact__form-div" id="contact-div">
          <form className="container-contact__form" onSubmit="">
            <div className="container-contact__input-div">
              <input type="text" class="container-contact__input" placeholder="Nombres" required/>
              <span className="container-contact__line"></span>
              <label className="container-contact__text-input" for="">Nombres</label>
            </div>

            <div className="container-contact__input-div">
              <input type="text" class="container-contact__input" placeholder="Apellidos" required/>
              <span className="container-contact__line"></span>
              <label className="container-contact__text-input" for="">Apellidos</label>
            </div>

            <div className="container-contact__input-div">
              <input type="text" class="container-contact__input" placeholder="Correo" required/>
              <span className="container-contact__line"></span>
              <label className="container-contact__text-input" for="">Correo</label>
            </div>

            <div className="container-contact__input-div">
              <textarea rows="10" className="container-contact__input" placeholder="Mensaje" required/>
              <span className="container-contact__line"></span>
              <label className="container-contact__text-input" for="">Mensaje</label>
            </div>


            <button class="container-contact__button" type="submit">Send</button>

          </form>

        </div>
      </div>
    </div>
  );
}

export { Contact };