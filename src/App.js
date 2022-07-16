
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" />
        <Routes>
          <Route path="/" element={<Textform heading="Enter the text" />} />
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
