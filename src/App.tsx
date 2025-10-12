import './App.css';
import GlossFrancine from "./assets/gloss_francisca.png"
import GlossMariMaria from "./assets/gloss_marimaria.png"
import GlossKiko from "./assets/gloss_kiko.png"
import Gloss from "./components/gloss";

//componente da nossa tela principal
function App() {
  const GlossList = [
    {imageUrl: GlossFrancine, price:"80",name:"Gloss Francisca"},
    {imageUrl: GlossMariMaria, price:"100",name:"Gloss Mari Maria"},
    {imageUrl: GlossKiko, price:"70",name:"Gloss Kiko"},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p className='title'>
          Loja de Gloss
        </p>
      </header>

      <div className='"content'>

        <div className='card-container'>

          {GlossList.map((gloss) => (
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
