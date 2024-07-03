import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./Component/Registration";
import Table from "./Component/Table";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration/>}></Route>
          <Route path="/table" element={<Table/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
