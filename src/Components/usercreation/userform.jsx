import './userform.css'

function UserForm() {

    return (
      <div className="main-container-form">
        <h1>Creacion o Modificacion de usuario</h1>
        <form className='user-form' action="">
          <div className='user-form-name'>
            <label htmlFor="fname">Nombre:</label>
            <input type="text" id="fname" name="fname" />
            <label htmlFor="fapellido">Apellido:</label>
            <input type="text" id="fapellido" name="fapellido" />
          </div> 

          <div className='user-form-data'>
            <label htmlFor="frol">Rol</label>
            <select name="frol" id="frol">
              <option value="volvo">Chef Marisco</option>
              <option value="saab">Chef</option>
              <option value="mercedes">Cajero</option>
              <option value="audi">Administrador</option>
              <option value="audi">Supervisor</option>
              <option value="audi">Mesero</option>
            </select>
            <label htmlFor="fphone-number">Celular</label>
            <input type="number" id='fphone-number' name='fphone-number' />
            <label htmlFor="fusername">Nombre de usuario:</label>
            <input type="text" id='fusername' name='fusername' />
            <label htmlFor="fpassword">Contraseña:</label>
            <input type="password" id='fpassword' name='fpassword' />
            <label htmlFor="fpassword-confirm">Confirmar contraseña:</label>
            <input type="password" id='fpassword-confirm' name='fpassword-confirm' />
          </div>
        </form>
        <div className='user-form-button'>
            <button type="submit">Guardar Usuario</button>
        </div>
      </div>
    )
  }
  
  export default UserForm

