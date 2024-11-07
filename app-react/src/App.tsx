import './App.css'
import Titulo from './Components/Titulo'
import Placeholder from './Components/Placeholder'

const App = () => {
  return (
    <>
      <Titulo nome="React TSX" descricao="minha descrição" data='05/11/2025'>
        <Placeholder/>
      </Titulo>
      <Titulo nome="Node JS" data="05/11/2025">
        <Placeholder/>
      </Titulo>
      <h1>Aula 02</h1>
    </>
  )
}

export default App
