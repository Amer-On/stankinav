import './ZoomButtons.css'
import {useDispatch} from "react-redux";

export default function ZoomButtons() {
    const dispatch = useDispatch();

    return (
        <div className='zoom-buttons'>
            <button onClick={() => dispatch({type: "ZOOM_IN"})} className='zoom-button zoom-in'>+</button>
            <button onClick={() => dispatch({type: "ZOOM_OUT"})} className='zoom-button zoom-out'>-</button>
        </div>
    )
}