
import './App.css';
import {Link} from "react-router-dom";
import MyNavBar from "./components/NavBar";
function App() {
  return (

    <div className="p-5 container-fluid">
        <MyNavBar></MyNavBar>
        <nav>
            <ul className="list-group">
                <li className="list-group-item"><a href="/">APP</a></li>
                <li className="list-group-item"><a href="/css">TEST CSS </a></li>
                <li className="list-group-item"><a href="/navbar">Navigation Bar </a></li>
                <li className="list-group-item"><a href="/ariane">Blog </a></li>
            </ul>
        </nav>
    </div>

  );
}
export default App;
