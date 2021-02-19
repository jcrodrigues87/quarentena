import { React, useEffect, useState } from 'react';

export const Contador = () => {

  const [cont, setCont] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (cont % 2 === 0) {
      setMensagem('PAR');
    } else {
      setMensagem('ÍMPAR');
    }
  }, [cont]);


  return (
    <>
      <h1>{cont}</h1>
      <h2>{mensagem}</h2>

      <button
        onClick={() => { setCont(cont - 1); }}
      >&lt;</button>


      <button
        onClick={() => { setCont(cont + 1); }}
      >&gt;</button>
    </>
  );
};


export default Contador;
