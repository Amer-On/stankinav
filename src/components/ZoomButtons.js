import './ZoomButtons.css'
import {useDispatch} from "react-redux";
import Button from "./Button";

export default function ZoomButtons() {
    const dispatch = useDispatch();

    return (
        <div className='zoom-buttons'>
            <Button onClick={() => dispatch({type: "ZOOM_IN"})} value={'+'} position='upper'/>
            <Button onClick={() => dispatch({type: "ZOOM_OUT"})} value={'-'} position='bottom'/>
        </div>
    )
}