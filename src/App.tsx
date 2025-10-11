import './App.css';
import GlossFrancine from "./assets/gloss_francine.jpeg"
import GlossMariMaria from "./assets/gloss_mari_maria.png"
import GlossMelu from "./assets/gloss_melu.jpeg"
import GlossKiko from "./assets/gloss_kiko.jpg"
import Gloss from "./components/gloss";

//componente da nossa tela principal
function App() {
  const GlossList = [
    {imageUrl: GlossFrancine, price:"80",name:"Gloss Francisca"},
    {imageUrl: GlossMariMaria, price:"100",name:"Gloss Mari Maria"},
    {imageUrl: GlossMelu, price:"15",name:"Gloss Melu"},
    {imageUrl: GlossKiko, price:"70",name:"Gloss Kiko"}
  ]

  return (
    <div className="App">
      {GlossList.map((gloss) => (
        <Gloss
          imageUrl={gloss.imageUrl}
          price={gloss.price}
          name={gloss.name}
        />
        ))}
    </div>
  );
}

export default App;
