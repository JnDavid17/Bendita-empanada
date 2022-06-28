import '../responsive.css';
import React from "react";
import {Header} from '../components/Header/index'
import { Slider } from '../components/Slider';
import { dataSlider } from '../components/Slider/dataSlider';
import { Welcome } from '../components/Welcome';
import { Productos } from '../components/Products';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

function App() {


  // Se crea un Hook para un contador el cual es de utilidad a la hora de establecer que imagen se muestra en el slide
  const [counter, setCounter] = React.useState(1);

  //Se crea un hook que sirve para intercambiar entre los contenedores alternativo y original en el componente Welcome.
  const [welcomeValidator, setWelcomeValidator] = React.useState(false);

  // Se crea un hook que sirve para validar si el usuario quiere ver más productos y así mismo
  const [productsValidator, setProductsValidator] = React.useState(false);








   let dataLength = dataSlider.length;

  // Se crea un temporizador para que se muestren las imagenes automaticamente sin necesidad de que el usuario accione el slider.
  let timer = window.setTimeout(() => {
    if (counter===5) {
      setCounter(1)
    } else {
      setCounter(counter+1)

    }
  }, 40000);


   // Se recorre el arreglo de empanadas para así encontrar la imagen correspondiente a la posición que se encuentra el usuario.

  let urlImage = dataSlider.find((url, index) => {
      return index + 1 === counter ? dataSlider[index] : "";
})




  

  return (
    <div className="mainContainer">
      <Header/>

      <Slider
      key={urlImage}
      timer = {timer}
      dataLength = {dataLength}
      url={urlImage}
      counter={counter}
      setCounter={setCounter}
      />


      <Welcome
      key ={""}
      welcomeValidator = {welcomeValidator}
      setWelcomeValidator = {setWelcomeValidator}
      />

      <Productos
      key = {"a"}
      productsValidator = {productsValidator}
      setProductsValidator = {setProductsValidator}
      />

      <Contact/>        

      <Footer/>

    </div>
  );
}

export default App;