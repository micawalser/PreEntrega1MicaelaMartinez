import {NavBar}  from "./components/NavBar"
import {ItemListContainer} from "./container/ItemListContainer"


const App = () => {
  return (

<>
<div className="container">
<NavBar/>
<div className="bienvenidos">

<ItemListContainer greeting={"Bienvenidos a Xodo sport"} />

</div>
</div>
</>

  );
}

export default App