import './App.css';
import Sedan from './components/sedan/Sedan';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lodka from './components/lodka/Lodka';
import Gruzovoy from './components/gruzovoy/Gruzovoy';
import ProductScreen from './components/productScreen/ProductScreen';
import Pricep from './components/pricep/Pricep';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sedan/" element={<Sedan />} />
          <Route path="/pricep/" element={<Pricep />} />
          <Route path="/gruzovoy/" element={<Gruzovoy />} />
          <Route path="/lodka/" element={<Lodka />} />
          <Route path="/item/:id" element={<ProductScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
