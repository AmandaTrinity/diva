import './App.css';
import IconBusca from "./assets/lipstick.png"
import GlossFrancine from "./assets/gloss_francisca.png"
import GlossMac from "./assets/mac.png"
import GlossMariMaria from "./assets/gloss_marimaria.png"
import GlossNinaSecrets from "./assets/nina_secrets.png"
import GlossOceane from "./assets/oceane.png"
import GlossKiko from "./assets/gloss_kiko.png"
import Gloss from "./components/gloss";
import { useState } from 'react';

//componente da nossa tela principal
function App() {

  const [busca, setBusca] = useState("");

  const GlossList = [
    {imageUrl: GlossFrancine, price:"80",name:"Gloss Francisca"},
    {imageUrl: GlossMariMaria, price:"100",name:"Gloss Mari Maria"},
    {imageUrl: GlossKiko, price:"70",name:"Gloss Kiko"},
    {imageUrl: GlossMac ,price:"120",name:"Gloss Mac"},
    {imageUrl: GlossNinaSecrets, price:"99",name:"Gloss Nina Secrets"},
    {imageUrl: GlossOceane, price:"150",name:"Gloss Oceane"},
  ]

  const GlossFilter = GlossList
  .filter((one_gloss) => one_gloss.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()));

  return (
    <div className="App">
      <header className="App-header">
        <p className='title'>
          Loja de Gloss
        </p>
      </header>
      <div className='search-container'> 
        <img src={IconBusca} className='icon' />
        <input 
        type='text'
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className='content'>

        <div className='card-container'>

          {GlossFilter.map((gloss) => (
            <Gloss
              imageUrl={gloss.imageUrl}
              price={gloss.price}
              name={gloss.name}
            />
            ))}

          </div>
      </div>

    </div>
  );
}

export default App;
