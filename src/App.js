import './App.css'
import Header from "./Header"
import Header2 from "./Header2"
import Part1 from "./Part1"
import Store from"./Store"
// import Collections from "./Collections.js"
import TopSection from "./TopSection"
// import BottomSection from "./BottomSection"
// import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header/>
      <Header2/>
      <TopSection/> 
      <Part1/>
      <Store/>
      {/* <Part2/>
      <Collections/>
     
      <BottomSection/>
      <Footer/>  */}
    </div>
  );
}

export default App;