import SearchBar from "./components/SearchBar";
import "./App.css"
import Map from "./building-map/Map";
import {useDispatch} from "react-redux";
import ZoomButtons from "./components/ZoomButtons";
import FloorSwitcher from "./components/FloorSwitcher";

const floors = [1, 2]

function App() {
    const dispatch = useDispatch();


    return (
        <div className='main-container' onMouseUp={() => dispatch({type: "SET_DRAGMAP", payload: false})}>
            <Map/>
            <SearchBar/>
            <ZoomButtons/>
            <FloorSwitcher floors={floors}/>
        </div>
    );
}

export default App;
