import './App.css'
import Header from "./Header"
import Header2 from "./Header2"
import Part1 from "./Part1"
import Store from"./Store"
import Store2 from './Store2'
import Store3 from "./Store3"
import TopSection from "./TopSection"
import Product from "./product"
// import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header/>
      <Header2/>
      <TopSection/> 
      <Part1/>
      <Store/>
      <Store2/>
      <Store3/>
      {/* <Product/> */}

      {/* <Part2/>
      <Collections/>
     
      <BottomSection/>
      <Footer/>  */}
    </div>
  );
}

export default App;