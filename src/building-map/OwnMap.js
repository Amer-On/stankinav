import './OwnMap.css'
import floor from './floors/floor1.svg'

import {useEffect, useState} from "react";


function OwnMap() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const [mousePosition, setMousePosition] = useState([0, 0])
    const [position, setPosition] = useState([0, 0]);
    const [drag, setDrag] = useState(false);

    return (
        <div className='map-container' style={{width: windowWidth, height: windowHeight}}
             onMouseUp={(e) => {
                 setDrag(false)
             }}>
            <img src={floor} draggable='false' className='map'
                 style={{
                     top: position[1],
                     left: position[0]
                 }}
                 onMouseDown={(e) => {
                     setDrag(true);
                     setMousePosition([
                         -position[0] + e.clientX,
                         -position[1] + e.clientY])
                 }}
                 onMouseMove={(e) => {
                     if (drag) {
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

export default OwnMap;