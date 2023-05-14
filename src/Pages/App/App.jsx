import './App.css'
import Sidebar from '../../Components/sidebar'
import UserForm from '../../Components/usercreation/userform'

function App() {

  return (
    <div className="App">
      <main className='main-container'>

        <div className='aside-container'>          
          <aside className='side-bar-menu'>
            <Sidebar/>
          </aside>
        </div>

        <div className='right-container'>
          <header className='top-container'>
            <div className='forms'>
              <UserForm/>
            </div>
            
          </header>

          <body >
            
          </body>
        </div>

      </main>
      
    </div>
  )
}

export default App
