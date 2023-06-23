import SearchBar from "./components/SearchBar";
import "./App.css"
import Map from "./building-map/Map";
import {useDispatch} from "react-redux";
import ZoomButtons from "./components/ZoomButtons";
import FloorSwitcher from "./components/FloorSwitcher";

const floors = [1, 2]

function App() {
    const dispatch = useDispatch();

    const finishDrag = () => {
        dispatch({type: "SET_DRAGMAP", payload: false})
    }

    return (
        <div className='main-container' onMouseUp={finishDrag}
             onTouchEnd={finishDrag}
             onTouchCancel={finishDrag}>
            <Map/>
            <SearchBar/>
            <ZoomButtons/>
            <FloorSwitcher floors={floors}/>
        </div>
    );
}

export default App;
