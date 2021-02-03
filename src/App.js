import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Content from './Content/Content';
import Content2 from './Content2/Content2';
import Content3 from './Content3/Content3';
import Coupon from './Coupon/Coupon';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Content/>
      <Content2/>
      <Content3/>
      <Coupon/>
      <Footer/>
    </div>
  );
}

export default App;
