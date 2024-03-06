import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { toastError, toastSuccess } from "./component/utils/toastWrapper";
import Home from './pages/Home';
function App() {
  return (
   <div>
    <Navbar/>
    <Toaster />
    <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
   </div>
  );
}

export default App;
