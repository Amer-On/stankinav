import './FloorSwitcher.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Button from "./Button";

export default function FloorSwitcher({floors}) {
    const dispatch = useDispatch();
    const floor = useSelector(state => state.level)
    const [active, setActive] = useState(floor);

    const onClick = (e) => {
        setActive(parseInt(e.target.value))
        dispatch({type: 'CHANGE_FLOOR', payload: e.target.value})
    }

    return floors ? (
        <div className='floor-buttons'>
            <Button onClick={onClick} value={floors[0]} position='upper' active={active}/>
            {floors.slice(1, -1).map(floor =>
                <Button onClick={onClick} value={floor} active={active}/>
            )}
            {floors.length > 1 ? (
                <Button onClick={onClick} value={floors.slice(-1)[0]} active={active} position='bottom'/>) : null}
        </div>
    ) : (<></>)
}