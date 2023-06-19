import SearchBar from "./building-map/SearchBar";
import "./App.css"
import Map from "./building-map/Map"

function App() {
    return (
        <div className='main-container'>
            <Map/>
            <SearchBar/>
        </div>
    );
}

export default App;
