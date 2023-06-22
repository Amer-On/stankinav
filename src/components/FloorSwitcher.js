import './FloorSwitcher.css'
import {useDispatch} from "react-redux";

export default function FloorSwitcher({floors}) {
    const dispatch = useDispatch();

    const onClick = (e) => {
        dispatch({type: 'CHANGE_FLOOR', payload: e.target.value})
    }

    return floors ? (
        <div className='floor-buttons'>
            <button onClick={onClick} value={floors[0]} className='floor-button upper-button'>{floors[0]}</button>
            {floors.slice(1, -1).map(floor =>
                <button className='floor-button' onClick={onClick} value={floor}>{floor}</button>
            )}
            {floors.length > 1 ? (
                <button onClick={onClick}
                        className='floor-button bottom-button' value={floors.slice(-1)}>{floors.slice(-1)}</button>
            ) : (<></>)}
        </div>
    ) : (<></>)
}