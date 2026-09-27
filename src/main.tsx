import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
// import App from './App'
// import { BotonClick } from './components/BotonClick'
// import { ConditionalRendering } from './components/ConditionalRendering'
import { Usuarios } from './components/Usuarios'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App/> */}
    {/* <BotonClick/> */}
    {/* <ConditionalRendering
      cargando = {false}
      sesionIniciada = {true}
    /> */}
    {/* <Contador/> */}
    {/* <Titulo/> */}
    <Usuarios/>
  </StrictMode>
  //state
)
