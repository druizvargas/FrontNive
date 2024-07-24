
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// importamos los componentes
import CompMostrarTareas from './componentes/CompMostrarTareas';
import CompAgregarTareas from './componentes/CompAgregartareas';
import CompEditarTareas from './componentes/CompEditarTareas';
import CompMenu from './componentes/CompMenu';
import CompFooter from './componentes/Footer';
import CompMostrarProyectos from './componentes/CompMostrarProyectos';
import CompEditarProyectos from './componentes/CompEditarProyectos';
import CompAgregarProyectos from './componentes/CompAgregarProyectos';

function App() {
  
  return (
  
      <div className='App'>
        <CompMenu/>
        <BrowserRouter>
        <Routes>

        <Route path='/tareas'exact element={<CompMostrarTareas/>}/>
        <Route path='/tareas/agregar'exact element={<CompAgregarTareas/>}/>
        <Route path='/tareas/editar/:id'exact element={<CompEditarTareas/>}/>
        <Route path='/proyectos'exact element={<CompMostrarProyectos/>}/>
        <Route path='/proyectos/agregar'exact element={<CompAgregarProyectos/>}/>
        <Route path='/proyectos/editar/:id'exact element={<CompEditarProyectos/>}/>
        </Routes>
        
        
        </BrowserRouter>
        < CompFooter/>
       
      </div>
      
  )
}

export default App
