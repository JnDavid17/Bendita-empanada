import React, { useState } from "react";
import { empanadasArray } from "./dataEmpanadas";
import { gaseosasArray } from "./dataGaseosas";
import "./index.css";

import { useSpring, animated } from "react-spring";

function Productos(props) {

  // Versiones del local storage
  const empanadasVersion = "EMPANADAS_V1";
  const gaseosasVersion = "GASEOSAS_V1";




  // Este hook se usa para rerenderizar el componente
  const [resetEmpanadas, setResetEmpanadas] = useState(false);

  // Arreglo de nombres de los productos que quiere ver el usuario
  const [showProducts, setShowProducts] = React.useState([]);

  // Se crean hooks de los checkbox que se crearon para el filtro de los productos, se sabrá que producto quiere ver el usuario
  const [stateCarne, setStateCarne] = React.useState(false);
  const [stateJamon, setStateJamon] = React.useState(false);
  const [stateMexicana, setStateMexicana] = React.useState(false);
  const [stateQueso, setStateQueso] = React.useState(false);
  const [stateRanchera, setStateRanchera] = React.useState(false);
  const [statePollo, setStatePollo] = React.useState(false);
  const [stateGaseosa, setStateGaseosa] = React.useState(false);


  //Se realiza el local storage, primero se pregunta si hay algún JSON guardado con el nombre de las versiones de las empanadas y gaseosas
  let localStorageItemEmpanadas = localStorage.getItem(empanadasVersion);
  let localStorageItemGaseosas = localStorage.getItem(gaseosasVersion);


  //Si no hay nada aún, se guardan en el local storage, si ya está creado, simplemente se pasa de largo
  if (!localStorageItemEmpanadas) {
    localStorage.setItem(empanadasVersion, JSON.stringify(empanadasArray));
    localStorageItemEmpanadas = localStorage.getItem(empanadasVersion);
  }

  if (!localStorageItemGaseosas) {
    localStorage.setItem(gaseosasVersion, JSON.stringify(gaseosasArray));
    localStorageItemGaseosas = localStorage.getItem(gaseosasVersion);
  }
  
  //Se pasa el JSON al formato de objeto javascript, para que se pueda asignar al array products
  let parsedEmpanadas = JSON.parse(localStorageItemEmpanadas);
  let parsedGaseosas = JSON.parse(localStorageItemGaseosas);


  // Se unen los arreglos de empanadas y gaseosas del local storage para poder mostrar todo
  let products = [...parsedEmpanadas, ...parsedGaseosas];
  
  // Se crea un arreglo auxiliar, y se pregunta si el usuario ya quiso filtrar los productos, si ya filtró, se muestran solo esos productos
  // Si no, se continua con el arreglo que contiene todos los productos
  let auxArray = [];
  
  if (showProducts.length > 0) {
    debugger;
    showProducts.forEach((element) => {
      products.filter((item, index) => {
        return item.taste === element ? auxArray.push(item) : "";
      });
    });
    products = auxArray;
  } 


  const stylesAllProducts = useSpring({
    opacity: props.productsValidator ? 1 : 0,
    y: props.productsValidator ? 0 : 500,
    config: { duration: "1000" },
  });

  const stylesPrincipalProducts = useSpring({
    opacity: !props.productsValidator ? 1 : 0,
    y: !props.productsValidator ? 0 : -500,
    config: { duration: "1000" },
  });
  

  // Se pregunta si el usuario quiere ver más productos, si es así, se mostrará todos, si no, se mostrará solo los tres principales
  const setProductsBoolean = (principal) => {
    props.setProductsValidator(principal);
    if (principal === true) {
      setShowProducts([]);
    }
  };



  //Esta función se encarga de seleccionar que productos se almacenan en el arreglo, aquí se tiene en cuenta el estado del checkbox 
  // de cada producto y se entra a esta función accionando cada checkbox, si el estado del checkbox es falso (si se desactivó)
  // simplemente se elimina de dicho arreglo, si por el contrario, el estado del checkbox es verdadero, se almacena el tipo de producto
  // que se quiere filtrar al arreglo showProducts
  const listedProducts = (name, state, setState) => {
    if (state === true) {
      setState(false);
      setShowProducts(showProducts.filter((item) => item !== name));
    } else {
      setState(true);
      setShowProducts([...showProducts, name]);
    }
  };

  // Se guarda los cambios del array empanadas en el local storage cuando se aumente la interacción de algún producto (excepto gaseosas)
  const saveEmpanadasArray = (newProducts) => {
    debugger
        // Se ordena el arreglo de empanadas de mayor a menor para establecer los tres productos principales
        newProducts.sort((a, b) => b.interactions - a.interactions);
    localStorage.setItem(empanadasVersion, JSON.stringify(newProducts));
      

  };


  // Cada que se le de al boton de "Comprar Ahora" en cualquier producto, este aumentará sus interacciones, por ende, subirá de puestos
  // y puede estar entre los tres productos principales, cabe aclarar que las gaseosas no se cuentan, ya que se busca que los
  // productos principales estén acorde a la tematica de la empresa (venta de empanadas) y se renderizará nuevamente el componente para que
  // los cambios hagan efecto al instante
  const counterInteractions = (name) => {

    products.forEach((element, index) => {
      if (products[index].name === name) {
        products[index].interactions++;
      }
    });

    let auxArray = [];
    auxArray = products.filter((item,index) => {
      return products[index].taste !== "Gaseosas"
    })


    saveEmpanadasArray(auxArray);
    setResetEmpanadas(!resetEmpanadas);
  };




  return (
    <div className="container-products" id="products-div">
      {/* Se pregunta si el usuario decidió ver todos los productos o solo quiere ver los principales */}
      {props.productsValidator ? (
        <animated.div
          className="animation-all-products"
          style={stylesAllProducts}
        >
          <h1>Productos</h1>
          <div className="container-products__cards-filter">
            <form className="container-products__filter">
              <div class="container-products__checkbox-products">
                <input
                  id="EmpanadasCarne"
                  name="EmpanadasCarne"
                  type="checkbox"
                  onChange={() =>
                    listedProducts("Carne", stateCarne, setStateCarne)
                  }
                />
                <label label for="EmpanadasCarne">
                  Empanadas de carne
                </label>
              </div>

              <div class="container-products__checkbox-products">
                <input
                  id="EmpanadasJamon"
                  name="EmpanadasJamon"
                  type="checkbox"
                  onChange={() =>
                    listedProducts("Jamon", stateJamon, setStateJamon)
                  }
                />
                <label label for="EmpanadasJamon">
                  Empanadas de jamon
                </label>
              </div>

              <div class="container-products__checkbox-products">
                <input
                  id="EmpanadasMexicana"
                  name="EmpanadasMexicana"
                  type="checkbox"
                  onChange={() =>
                    listedProducts("Mexicana", stateMexicana, setStateMexicana)
                  }
                />
                <label label for="EmpanadasMexicana">
                  Empanadas mexicana
                </label>
              </div>

              <div class="container-products__checkbox-products">
                <input
                  id="EmpanadasQueso"
                  name="EmpanadasQueso"
                  type="checkbox"
                  onChange={() =>
                    listedProducts("Queso", stateQueso, setStateQueso)
                  }
                />
                <label label for="EmpanadasQueso">
                  Empanadas de queso
                </label>
              </div>

              <div class="container-products__checkbox-products">
                <input
                  id="EmpanadasRanchera"
                  name="EmpanadasRanchera"
                  type="checkbox"
                  onChange={() =>
                    listedProducts("Ranchera", stateRanchera, setStateRanchera)
                  }
                />
                <label label for="EmpanadasRanchera">
                  Empanadas ranchera
                </label>
              </div>

              <div class="container-products__checkbox-products">
                <input
                  id="EmpanadasPollo"
                  name="EmpanadasPollo"
                  type="checkbox"
                  onChange={() =>
                    listedProducts("Pollo", statePollo, setStatePollo)
                  }
                />
                <label label for="EmpanadasPollo">
                  Empanadas de pollo{" "}
                </label>
              </div>

              <div class="container-products__checkbox-products">
                <input
                  id="Gaseosas"
                  name="Gaseosas"
                  type="checkbox"
                  onChange={() =>
                    listedProducts("Gaseosas", stateGaseosa, setStateGaseosa)
                  }
                />
                <label label for="Gaseosas">
                  Gaseosas
                </label>
              </div>

              <button onClick={() => setProductsBoolean(false)}>
                Ver menos
              </button>
            </form>
            <div className="container-products__cards">
              {products.map((item, index) => (
                <div className="container-products__card">
                  <div className="container-products__product-image">
                    <img
                      src={products[index].image}
                      alt={products[index].name}
                    />
                  </div>
                  <div className="container-products__content-card">
                    <h3>{products[index].name}</h3>
                    <h2 className="container-products__product-price">
                      <small>$</small>
                      {products[index].price}
                    </h2>
                    <button
                      onClick={() => counterInteractions(products[index].name)}
                    >
                      Comprar ahora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </animated.div>
      ) : (
        <animated.div
          className="animation-principal-products"
          style={stylesPrincipalProducts}
        >
          <h1>Productos principales</h1>
          <div className="container-products__cards">
            <div className="container-products__card">
              <div className="container-products__product-image">
                <img src={products[0].image} alt={products[0].name} />
              </div>
              <div className="container-products__content-card">
                <h3>{products[0].name}</h3>
                <h2 className="container-products__product-price">
                  <small>$</small>
                  {products[0].price}
                </h2>
                <button
                  onClick={() =>
                    counterInteractions(products[0].name)
                  }
                >
                  {" "}
                  Comprar ahora{" "}
                </button>
              </div>
            </div>

            <div className="container-products__card">
              <div className="container-products__product-image">
                <img src={products[1].image} alt={products[1].name} />
              </div>
              <div className="container-products__content-card">
                <h3>{products[1].name}</h3>
                <h2 className="container-products__product-price">
                  <small>$</small>
                  {products[1].price}
                </h2>
                <button
                  onClick={() =>
                    counterInteractions(products[1].name)
                  }
                >
                  {" "}
                  Comprar ahora{" "}
                </button>
              </div>
            </div>

            <div className="container-products__card">
              <div className="container-products__product-image">
                <img src={products[2].image} alt={products[2].name} />
              </div>
              <div className="container-products__content-card">
                <h3>{products[2].name}</h3>
                <h2 className="container-products__product-price">
                  <small>$</small>
                  {products[2].price}
                </h2>
                <button
                  onClick={() =>
                    counterInteractions(products[2].name)
                  }
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => setProductsBoolean(true)}>Ver mas</button>
        </animated.div>
      )}
    </div>
  );
}

export { Productos };
