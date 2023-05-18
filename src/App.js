import Home from "./componentes/Home/Home";
import CartWidget from "./componentes/CartWidget/CartWidget";
import DataProvider from "./componentes/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
