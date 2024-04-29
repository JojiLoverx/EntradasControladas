import { useState } from 'react'
function App (){
  const [miTexto, setMiTexto]=useState('');

  const handleText = (Event)=> {
    const textoIngresado = event.target.value;
    setMiTexto(textoIngresado);
  };
  return(
    <div>
      <div>Ingrese Texto: </div>
      <input type="text" onChange={handleText} value={miTexto} />
      <p>{miTexto}</p>
    </div>
  );
 }

export default App;