import './App.css';
import Map from './map/Map'
import Header from "./general/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router";
import About from "./general/About";
import NoMatch from "./general/NoMatch";
import Join from "./general/Join";


function App() {
    return (
        <div>
            <div className="App">
                <Header title='Main page'></Header>
            </div>

            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route index element={<About/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/join" element={<Join/>}/>

                {/* catch 404 */}
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </div>
    );
}

export default App;
