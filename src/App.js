import SearchBar from "./components/SearchBar";
import "./App.css"
import Map from "./building-map/Map";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const dragMap = useSelector(state => state.dragMap)

    useEffect(() => {
        console.log('OUTER CHANGES')
        console.log(dragMap)
    }, [dragMap])


    return (
        <div className='main-container' onMouseUp={
            () => {
                console.log('should drag')
                dispatch({type: "SET_DRAGMAP", payload: false})
            }
        }>
            <Map/>
            <SearchBar/>
        </div>
    );
}

export default App;
