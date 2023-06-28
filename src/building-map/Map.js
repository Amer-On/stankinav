import './Map.css'

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const zoomCoefficient = 0.2;

function Map() {
    const level = useSelector(state => state.level)

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const dispatch = useDispatch();
    const zoom = useSelector(state => state.zoom) * zoomCoefficient
    const dragMap = useSelector(state => state.dragMap)

    const [mousePosition, setMousePosition] = useState([0, 0])
    const [position, setPosition] = useState([0, 0]);
    const [svgMap, setSvgMap] = useState('')

    useEffect(() => {
        async function importMap() {
            let importedIcon = await import('./floors/floor' + level + '.svg');
            setSvgMap(importedIcon.default);
        }

        importMap().catch(e => console.log(e))
    }, [level])


    return (
        <div className='map-container' style={{width: windowWidth, height: windowHeight}}>
            <img src={svgMap} draggable='false' className='map'
                 style={{
                     width: 100 * zoom + "%",
                     height: 100 * zoom + "%",
                     top: position[1],
                     left: position[0]
                 }}
                 onTouchStart={e => {
                     dispatch({type: "SET_DRAGMAP", payload: true})
                     setMousePosition([
                         -position[0] + e.touches.item(0).clientX,
                         -position[1] + e.touches.item(0).clientY])
                 }}
                 onTouchMove={e => {
                     if (dragMap) {
                         setPosition([
                             e.touches.item(-1).clientX - mousePosition[0],
                             e.touches.item(-1).clientY - mousePosition[1]
                         ])
                     }
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