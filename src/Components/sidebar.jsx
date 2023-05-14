import home from "../icons/home.svg"
import orders from "../icons/ordenes.svg"
import food from "../icons/platillos.svg"
import drinks from "../icons/bebidas.svg"
import categories from "../icons/categoria.svg"
import users from "../icons/usuarios.svg"
import sales from "../icons/ventas.svg"
import reports from "../icons/repotes.svg"
import binnacle from "../icons/bitacora.svg"
import out from "../icons/salir.svg"
import "./sidebar.css"
import logo from "../icons/logo.png"


function Sidebar() {

    return (
      <nav className="navbar">

        <div className="logo-navbar">
          <img src={logo} alt="logo"  />      
        </div>

        <div className="principal-options">

          <ul className="options">
            <li className="option-select">
              <a href="#">
                
                <img src={home} alt="iconHome" />
                <p>INICIO</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={orders} alt="iconHome" />
                <p>ORDENES</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={food} alt="iconHome" />
                <p>PLATILLOS</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={drinks} alt="iconHome" />
                <p>BEBIDAS</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={categories} alt="iconHome" />
                <p>CATEGORIAS</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={users} alt="iconHome" />
                <p>USUARIOS</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={sales} alt="iconHome" />
                <p>VENTAS</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={reports} alt="iconHome" />
                <p>REPORTES</p>
              </a>              
            </li>

            <li className="option-select">
              <a href="#">
                <img src={binnacle} alt="" />
                <p>BITACORAS</p>
              </a>              
            </li>
          </ul>
        </div>

        <ul className="bottom-options">
          <li className="option-select">
            <a href="#" onClick={() => console.log("hola")}>
              <img src={out} alt="iconOut" />
              <p>SALIR</p>
            </a>            
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Sidebar

