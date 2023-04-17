import {NavBar}  from "./components/NavBar"
import {ItemListContainer} from "./container/ItemListContainer"
import {useEffect, useState} from "react";
import compoPres from "./components/compoPres";

const App = () => {
 const getProducts = async () => {
  const response = await fetch ("https://fakestoreapi.com/products");
  const data = await response.json() ;
  return data ;
 } ;

 const [product, setProduct] = useState([]);
 
 useEffect (() =>{
  getProducts().then((product) => setProduct (product));
 }, []); 
  
 
 return (

<div>


  {product.map((prod)=>{
    return (
      <compoPres
      key={product.id}
      tittle= {product.title}
      price= {product.price} />
    );
  })}  
/*<>
<div className="container">
<NavBar/>
<div className="bienvenidos">

<ItemListContainer greeting={"Bienvenidos a Xodo sport"} />

</div>
</div>
</>
</div>
  );

}

export default App