import "./App.css";
import Card from "./componentes/card";

function App() {
  return (
          <div className="App">
            <div className="contenedor-principal">
              <h1>Proyectos Personales en React</h1>
              <Card
                nombre="Contador"
                imagen="1"
                texto="En este proyecto encontraremos un contador de Clics de forma incremental, con su respectivo boton para reiniciar el conteo"
                link="/contador"
              />
              <Card
                nombre="Calculadora"
                imagen="2"
                texto="Este proyecto nos ayuda a realizar cálculos basicos como suma, resta, multiplicación y división."
                link="/calculadora"
              />
              <Card
                nombre="App De Tareas"
                imagen="3"
                texto=" Esta app nos permite depositar información y organizarla correctamente."
                link="/AppTareas"
              />
            </div>
          </div>
  );
}


export default App;
