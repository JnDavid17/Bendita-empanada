import React from "react";
import "./index.css";
import { useSpring, animated } from "react-spring";
import empanada1 from "../../assets/EmpanadaJamon2.jpg"
import empanada2 from "../../assets/EmpanadaQueso2.jpg"
import empanada3 from "../../assets/EmpanadaQueso.jpg"
import empanada4 from "../../assets/EmpanadaPollo3.jpg"
import empanada5 from "../../assets/EmpanadaJamon3.jpg"



function Welcome(props) {


  // Se establecen los estilos para el contenedor alternativo, el cual da más detalles acerca de la empresa
  const stylesAlternative = useSpring({
    opacity: props.welcomeValidator ? 1 : 0,
    x: props.welcomeValidator ? 0 : 300,
    config: { duration: "1000" },  

    });

  // Se establecen los estilos para el contenedor original, el que se ve al inicio, el cual da un pequeño resumen acerca de la empresa

  const stylesOriginal = useSpring({
    opacity: !props.welcomeValidator ? 1 : 0,
    x: !props.welcomeValidator ? 0 : -500,
    config: { duration: "1000" },  

  });


  // Cuando el usuario desee ver más sobre la empresa o ver menos, accionará el botón correspondiente 
  // y este a su vez llama a esta función para intercambiar entre los contenedores

  const setWelcomeBoolean = (original) => {
    original
      ? props.setWelcomeValidator(original)
      : props.setWelcomeValidator(original);
  };

  return (
    <div className="welcome-section" id="welcome-div">
      <h1 className="welcome-section__title"> Texto de Bienvenida </h1>

      {/* Se pregunta si la variable welcomeValidator es verdadera o falsa para así elegir que contenedor mostrar, esta variable se encarga 
      de especificar que contenedor se mostrará, si es falso, significa que no se ha accionado el botón de ver más, por ende mostrará 
      el contenedor original, y si se accionó dicho botón, se mostrará el contenedor alternativo */}
      {props.welcomeValidator ? (

        // Se llama al componente animated.div que es el encargado de aplicar las animaciones o transiciones correspondientes
        <animated.div className="animation-alternative-container" style={stylesAlternative}>
          <div className="welcome-section__alternative-container">
            <div className="welcome-section__container-divs">
              <div className="welcome-section__first-div">
                <img src={empanada1}></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec eros vel augue molestie semper vel pellentesque
                  velit. Sed id massa id neque consectetur dictum. Nulla massa
                  massa, ultricies nec imperdiet vitae, tempor sit amet nisi.
                  Integer magna augue, mattis vitae dapibus at, varius ac justo.
                  Vestibulum eleifend vulputate posuere. Vestibulum in mattis
                  quam. Vestibulum sodales tellus ligula, sed dictum metus
                  imperdiet sit amet. Nunc pharetra eros libero, consectetur
                  sollicitudin eros faucibus nec. Nulla molestie erat in libero
                  egestas finibus. Suspendisse cursus gravida luctus. Nulla
                  tincidunt gravida risus in faucibus. Aliquam erat volutpat.
                  Phasellus mattis et nulla quis consequat.
                </p>
              </div>

              <div className="welcome-section__second-div">
                <img src={empanada2}></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec eros vel augue molestie semper vel pellentesque
                  velit. Sed id massa id neque consectetur dictum. Nulla massa
                  massa, ultricies nec imperdiet vitae, tempor sit amet nisi.
                  Integer magna augue, mattis vitae dapibus at, varius ac justo.
                  Vestibulum eleifend vulputate posuere. Vestibulum in mattis
                  quam. Vestibulum sodales tellus ligula, sed dictum metus
                  imperdiet sit amet. Nunc pharetra eros libero, consectetur
                  sollicitudin eros faucibus nec. Nulla molestie erat in libero
                  egestas finibus. Suspendisse cursus gravida luctus. Nulla
                  tincidunt gravida risus in faucibus. Aliquam erat volutpat.
                  Phasellus mattis et nulla quis consequat.
                </p>
              </div>

              <div className="welcome-section__third-div">
                <img src={empanada3}></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec eros vel augue molestie semper vel pellentesque
                  velit. Sed id massa id neque consectetur dictum. Nulla massa
                  massa, ultricies nec imperdiet vitae, tempor sit amet nisi.
                  Integer magna augue, mattis vitae dapibus at, varius ac justo.
                  Vestibulum eleifend vulputate posuere. Vestibulum in mattis
                  quam. Vestibulum sodales tellus ligula, sed dictum metus
                  imperdiet sit amet. Nunc pharetra eros libero, consectetur
                  sollicitudin eros faucibus nec. Nulla molestie erat in libero
                  egestas finibus. Suspendisse cursus gravida luctus. Nulla
                  tincidunt gravida risus in faucibus. Aliquam erat volutpat.
                  Phasellus mattis et nulla quis consequat.
                </p>
              </div>
            </div>

            <button
              onClick={() => setWelcomeBoolean(false)}
            >
              Ver menos
            </button>
          </div>
        </animated.div>
      ) : (
        <animated.div className="animation-original-container" style={stylesOriginal}>
                  <div className="welcome-section__original-container">
          <div className="welcome-section__original-container--image">
            <img src={empanada4}></img>
          </div>
          <div className="welcome-section__container-text">
            <p className="first-paragraph">
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

            <p className="second-paragraph">
              Vestibulum feugiat pellentesque metus. Aliquam suscipit metus non
              justo tincidunt consectetur. Proin nec erat nec odio ultrices
              tincidunt. In volutpat neque nec justo gravida, et auctor arcu
              scelerisque. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Proin aliquet enim
              placerat, efficitur dolor a, dapibus elit. Suspendisse finibus
              ante ut molestie imperdiet. Suspendisse sem ante, cursus a
              pellentesque et, bibendum nec felis. Etiam fringilla lorem turpis.
            </p>


            <button
              onClick={() => setWelcomeBoolean(true)}
              className="welcome-section__original-container--text-button"
            >
              Ver más
            </button>
          </div>
        </div>
        </animated.div>
      )}
    </div>
  );
}

export { Welcome };
