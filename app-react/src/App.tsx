import { useEffect, useState } from 'react'
import './App.scss'
import Titulo from './Components/Titulo'
import Placeholder from './Components/Placeholder'
import Botao from './Components/Botao'

const App = () => {

  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState("");

  useEffect( () => {
    console.log('Entrou no effect')
  }, [numero])

  return (
    <>
    <h1>{numero}</h1>
    <h1>Bem vindo, {nome}</h1>
      <Titulo nome="React TSX" 
        descricao={`Curso Introdutório ${numero} `} 
        data='05/11/2025'>
        <Placeholder/>
      </Titulo>

      <h1>Aula 03</h1>
      <Botao 
        onClick={() => setNumero(numero + 1)} 
        severity='primary' 
        label='+1'/>

      <Botao 
        onClick={() => setNumero(numero - 1)}
        severity='secondary' 
        label='-1'/>
      
      <Botao
        label="Aviso"
        severity="warning"
        onClick={() => {
          setNome("Kauhee");
          }
        }
      />

    </>
  )
}

export default App
