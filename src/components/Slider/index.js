import React from 'react'
import "./index.css"

function Slider(props) {
    

    let dataLength = props.dataLength;
    // //Se guarda el registro de la posición del botón seleccionado para así resaltarlo como activo, que es donde se encuentra la imagen que esté
    // observando el usuario y se reinicia el timeout que se usa para que el slider cambie de imagen automaticamente.
    const moveDot = (index) => {
        props.setCounter(index)
        clearTimeout(props.timer)
      }

  return (
    <div className="containerSlider">
      <div className="slide">



        <img src={props.url} alt=""></img>
        
      </div>

      <div className="container-dots">
        {/* Se crean los botones que irán en la parte inferior del slide para indicar en que imagen se encuentra y poder navegar por el slide
                y elegir que imagen desea observar. Para realizarlo, se usó un Array predeterminado debido a que el ciclo for o while no se puede utilizar
                en este contexto, luego se establece la longitud de dicho arreglo predeterminado y se van creando los respectivos botones. */}
        {Array.from({length: dataLength}).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={props.counter === index + 1 ? "dotActive" : "dot"}
          ></div>
        ))
        }
      </div>
    </div>
  );
}

export {Slider}