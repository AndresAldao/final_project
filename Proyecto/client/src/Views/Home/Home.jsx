
import Paginated from "../../Components/Paginated/Paginated";
import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux"; //mis hooks
import {getProducts} from "../../Redux/actions"
import { Link } from "react-router-dom";
import CardsProducts from "../../Components/CardsProducts/CardsProducts"

const Home= ()=>{

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);


  const allProducts= useSelector(state=> state.products) ;
  const[pageActual, setPageActual]= useState (1); //numero de pagina donde estoy
  const[productsViews, setProductsViews]= useState (10);
  const lastIndex= pageActual * productsViews; //segundo parametro
  const firstIndex= lastIndex - productsViews; //primer parameto
  const maximumPage= Math.ceil(allProducts.length/productsViews); //nose si sera par o inpar
  const newStateProducts= allProducts.slice(firstIndex,lastIndex);


  const pagin=(pageNumber)=>{ //rendirizamos
    setPageActual(pageNumber); //pasamos los numero de las paginas para modificar el estado local
  }

  return (
   <div >
    <h1>home</h1>
      <Link to= "/products"><button>products</button></Link>
      {/* <NavBar />//!Cambiar componente */}
      
      {/* <Filter /> */}
    
      <Paginated maximumPage={maximumPage} pagin={pagin}/>
      
      <CardsProducts newStateProducts ={newStateProducts} />


      <p>Pagina {pageActual}</p>
   </div>
  )
};

export default Home;

