

import { useState } from 'react';
import Banner from './Componentes/Banner/Banner.js';
import Formulario from './Componentes/Formulario/index.js';
import Time from './Componentes/Time/index.js';

function App() {

  const times = [
    {
      nome:  'Programação',
      corprimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corprimaria: '#82CFFA',
      corSecundaria: '#D8F8FF'
    },
    {
      nome:  'Back-End',
      corprimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Data Science',
      corprimaria: '#E06869',
      corSecundaria: '#FD37E8'
    },
    {
      nome:  'Devops',
      corprimaria: '#D86EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Ux e Design',
      corprimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Gestão',
      corprimaria: '#FFBAD5',
      corSecundaria: '#FFEEDF'
    },
  ]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador)=>{
  console.log(colaborador)
  setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
          <Banner/>
          <Formulario times={times.map(time => time.nome)} 
          aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
          
          {times.map(time => <Time 
          key={time.nome} 
          nome={time.nome} 
          corprimaria={time.corprimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          
          />)}
      
     
     
      
    </div>
  );
}

export default App;
