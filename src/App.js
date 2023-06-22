import SearchBar from "./components/SearchBar";
import "./App.css"
import Map from "./building-map/Map";
import {useDispatch} from "react-redux";
import ZoomButtons from "./components/ZoomButtons";

function App() {
    const dispatch = useDispatch();


    return (
        <div className='main-container' onMouseUp={() => dispatch({type: "SET_DRAGMAP", payload: false})}>
            <Map/>
            <SearchBar/>
            <ZoomButtons/>
        </div>
    );
}

export default App;
