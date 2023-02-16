import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div>
      <header>
        <b className="navbar-left" >Iniciando React</b>
        <input className="input" Placeholder="Procurar" ></input>
        <nav className="navbar-right">
          <a href='#' className='header-links'  >Docs</a>
          <a href='#' className='header-links'  >Ajuda</a>
          <a  className='header-links'  href="https://github.com/JoaoOliveiraskt" target="_blank">Github
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
          </svg>
          </a>
        </nav>
      </header>
      </div>

      
      <div className="main-content">
        <div className='container'>
          <div className="hero-container">
            <img src={reactLogo} alt="React-logo" className="React-logo"/>
            <h1>React</h1>
            <span>junte-se a nós e embarque nessa jornada</span>
            <div className='btn-getStarted'>
            <a className="get-started" 
            href="https://www.w3schools.com/react/react_getstarted.asp" target="_blank">
            To dentro</a>
            </div>
          </div>
        </div>
      </div>
    


    <div className="info-container">
      
      <div className="hero-content">
      
      <div className="row">
        
        <div className="text-content ">
        <h2>Titulo 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In vitae maximus nunc, sed volutpat dui. Curabitur ac scelerisque 
            nisi. Praesent euismod est nec neque varius, quis vehicula quam 
            accumsan. 
          </p>
        </div>
        <div className="text-content">
        <h2>Titulo 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In vitae maximus nunc, sed volutpat dui. Curabitur ac scelerisque 
            nisi. Praesent euismod est nec neque varius, quis vehicula quam 
            accumsan. 
          </p>
        </div>
        <div className="text-content">
        <h2>Titulo 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In vitae maximus nunc, sed volutpat dui. Curabitur ac scelerisque 
            nisi. Praesent euismod est nec neque varius, quis vehicula quam 
            accumsan. 
          </p>
        </div>
        
        </div>
      </div>
    </div>
    
</div>
  )

}

export default App
