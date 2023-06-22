import './ZoomButtons.css'
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

export default function ZoomButtons() {
    const dispatch = useDispatch();
    const zoom = useSelector(state => state.zoom)

    useEffect(() => {
        console.log(zoom)
    }, [zoom])

    return (
        <div className='zoom-buttons'>
            <button onClick={() => dispatch({type: "ZOOM_IN"})} className='zoom-button zoom-in'>+</button>
            <button onClick={() => dispatch({type: "ZOOM_OUT"})} className='zoom-button zoom-out'>-</button>
        </div>
    )
}