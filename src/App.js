

import { useState } from 'react';
import Banner from './Componentes/Banner/Banner.js';
import Formulario from './Componentes/Formulario/index.js';
import Time from './Componentes/Time/index.js';

function App() {

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador)=>{
  console.log(colaborador)
  setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front_end"/>
      <Time nome="back-end"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="Ux e Designer"/>
      <Time nome="Gestao"/>
      
      
    </div>
  );
}

export default App;
