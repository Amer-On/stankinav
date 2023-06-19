import './Map.css'
import floor from './plans/floor1.svg'

function Map() {


    return (
        <div className='map-container'>
            <img className='map' src={floor} alt='the map'/>
        </div>
    )
}

export default Map;