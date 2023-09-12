import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, Navbar,Checkout,SeacrhResults,ProductPage } from './components'

function App() {
  return (
    <div className="bg-purple-400">
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/search' element={<SeacrhResults/>} />
        <Route exact path='/product/:id' element={<ProductPage/>} />
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
