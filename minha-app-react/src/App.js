import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Titulo = ({ texto, subtexto }) => (
  <div>
    <h1>{texto}</h1>
    <h2>{subtexto}</h2>
  </div>
);


function App() {

  const [txt, setTxt] = useState('Título padrão!');


  return (
    <div className="App">
      <header className="App-header">

        <Titulo
          texto={txt}
          subtexto="Subtítulo da aplicação"
        />

        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => setTxt('Novo Título da App!')}>CLIQUE AQUI</button>

      </header>
    </div>
  );
}

export default App;
