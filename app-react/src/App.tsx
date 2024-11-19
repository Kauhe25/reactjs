import React, { useState } from 'react'
import './App.scss'
import MenuCustomizado from './Components/Menu/menu.styled';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import FormularioCustom from './Pages/Formulario/formulario.styled';
import ListagemCustom from './Pages/Listagem/Listagem.styled';
import ListagemDetalhes from './Pages/ListagemDetalhes';




interface OpcaoCursoProps {
  item: string;
}

const App = () => {
  const [curso, setCurso] = useState("Nenhum curso selecionado");
  const handlerCurso = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCurso(evt.target.value)
  }

  const cursos = ["ReactJS", "NodeJS", "CSS & JS Pro"];

  const OpcaoCurso = ({ item }: OpcaoCursoProps) => (
    <>
      <label>
        <input 
          type="radio" 
          name="curso" 
          value={item} 
          onChange={handlerCurso} 
          checked={curso == item} 
          />
        {item}
      </label>
      <br />
    </>
  );

  return (
    <>
    <BrowserRouter>
      <MenuCustomizado/>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/formulario" element={<FormularioCustom/>} />
          

          <Route path="/listagem">
            <Route index element={<ListagemCustom />} />
            <Route path=":id" element={<ListagemDetalhes/>} />
          </Route>

        </Routes>
      </div>

    </BrowserRouter>
    
  </>
  )
}

export default App
