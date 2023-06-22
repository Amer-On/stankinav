import SearchBar from "./building-map/SearchBar";
import "./App.css"
import OwnMap from "./building-map/OwnMap";

function App() {
    return (
        <div className='main-container'>
            <OwnMap/>
            <SearchBar/>
        </div>
    );
}

export default App;
