import './Map.css'
import floor from './floors/floor1.svg'

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const zoomCoefficient = 0.2;

function Map() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const dispatch = useDispatch();
    const zoom = useSelector(state => state.zoom) * zoomCoefficient
    const dragMap = useSelector(state => state.dragMap)

    const [mousePosition, setMousePosition] = useState([0, 0])
    const [position, setPosition] = useState([0, 0]);

    return (
        <div className='map-container' style={{width: windowWidth, height: windowHeight}}>
            <img src={floor} draggable='false' className='map'
                 style={{
                     width: 100*zoom + "%",
                     height: 100*zoom + "%",
                     top: position[1],
                     left: position[0]
                 }}
                 onMouseDown={(e) => {
                     dispatch({type: "SET_DRAGMAP", payload: true})
                     setMousePosition([
                         -position[0] + e.clientX,
                         -position[1] + e.clientY])
                 }}
                 onMouseMove={(e) => {
                     if (dragMap) {
                         setPosition([
                             e.clientX - mousePosition[0],
                             e.clientY - mousePosition[1]
                         ])
                     }
                 }}
                 alt='map'
            />
        </div>
    );
}

export default Map;