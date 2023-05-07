

import Banner from './Componentes/Banner/Banner.js';
import CampoTexto from './Componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
      
    </div>
  );
}

export default App;
